import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { sendOtpVerificationMail, verifyEmailOTP } from "./verifyEmail.controller.js";

const generateAccessAndRefreshToken = async(userId) =>{
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})

        return {accessToken, refreshToken}
    }
    catch(error){
        throw new ApiError(500, "Something went wrong while Generating access or refresh token")
    }
}


const registerUser = asyncHandler(async(req, res)=>{
    console.log(req.body);
    const {companyEmail, phoneNumber, companyName, name, employeeSize} = req.body;

    if(
        [companyEmail, phoneNumber, companyName, name].some((field)=>field?.trim() ==="")
    ){
        throw new ApiError(400, "All Fields are Required");
    }

    const existedUser = await User.findOne({
        $or:[{companyEmail}, {phoneNumber}]
    });

    if(existedUser){
        throw new ApiError(409, "User with email or phone exist");
    }

    const user = await User.create({
        companyEmail,
        companyName, 
        phoneNumber,
        name,
        employeeSize : Number(employeeSize),
    });

    const createdUser = await User.findById(user._id).select("-refreshToken");

    if(!createdUser){
        throw new ApiError(500, "something went wrong while creating new user data");
    }
    
    const sendOTP = sendOtpVerificationMail({body:{companyEmail, phoneNumber}}, res);
    
    if(sendOTP === 500){
        throw new ApiError(500, "Email not sent.");
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User Registered Successfully!")
    )

});

const loginUser = asyncHandler(async (req, res) => {
    const { companyEmail, otp } = req.body;

    const user = await User.findOne({ companyEmail });

    if (!user) {
        return res.status(404).json(new ApiResponse(404, null, "User not found."));
    }

    try {
        const verifiedUser = await verifyEmailOTP({ body: { companyEmail, otp } });

        return res.status(200).json(new ApiResponse(200,verifiedUser,  "User logged in successfully."));
    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, null, error.message));
        }
        return res.status(500).json(new ApiResponse(500, null, "Internal Server Error"));
    }
});


const getUser = asyncHandler(async(req, res)=>{
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user : req.user,
                }
            )
        )
});

export{
    registerUser,
    loginUser,
    getUser,
}