import nodemailer from "nodemailer";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const sendOtpVerificationMail = asyncHandler(async (req, res) => {
  const { companyEmail } = req.body;
  const user = await User.findOne({ companyEmail });

  if (!user) {
    throw new ApiError(404, "User Not Found");
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  user.emailOTP = otp;

  user.otpExpires = Date.now() + 10 * 60 * 1000;

  await user.save();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: companyEmail,
    subject: "Email verification OTP",
    text: `OTP for verify your jobboard account is : ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return 500;
    } else {
      console.log("Email sent : " + info.response);
      return res.status(200).send("Email sent successfully.");
    }
  });
});

const verifyEmailOTP = asyncHandler(async (req, res) => {
  const { companyEmail, otp } = req.body;
  const user = await User.findOne({ companyEmail });

  if (!user || user.emailOTP !== otp || Date.now() > user.otpExpires) {
    console.log("Invalid or Expired OTP");
    return res.status(400).send("invalid or expired otp");
  }

  user.emailVerified = true;
  user.emailOTP = null;
  user.otpExpires = null;

  await user.save();

  return res.status(200).json(new ApiResponse(200, user, "Email Verified SuccessFully"));
});

export { sendOtpVerificationMail, verifyEmailOTP };
