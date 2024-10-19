import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
    companyEmail: {
        type:String,
        trim:true,
        unique:true,
        required:true,
        lowercase:true,
    },
    phoneNumber:{
        type:String,
        trim:true,
        index:true,
        required:true,
        unique:true,
    },
    companyName:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    name:{
        type:String,
        trim:true,
        required:true,
        index:true,
    },
    employeeSize:{
        type:Number,
        required:true,
        trim:true,
        index:true,
    },
    emailVerified:{
        type:Boolean,
        default:false,
    },
    mobileVerified:{
        type:Boolean,
        default:false,
    },
    emailOTP:{
        type:String,
    },
    mobileOTP:{
        type:String,
    },
    otpExpires:{
        type:Date
    },
    refreshToken:{
        type:String,
    }
}, {timestamps:true});


userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            companyEmail:this.companyEmail,
            phoneNumber:this.phoneNumber,
            name : this.companyName,
            employSize:this.employSize,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}

export const User = mongoose.model("User", userSchema);

