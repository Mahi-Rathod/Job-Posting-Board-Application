import { Router } from "express";
import { sendOtpVerificationMail, verifyEmailOTP } from "../controllers/verifyEmail.controller.js";

const router = Router();

router.route("/send-otp-verification-mail").post(sendOtpVerificationMail);
router.route("/verify-email-otp").post(verifyEmailOTP);
export default router;