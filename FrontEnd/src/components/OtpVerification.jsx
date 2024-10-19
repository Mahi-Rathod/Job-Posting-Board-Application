import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import './style.css'
import axios from 'axios';
function OtpVerification() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm();
  const [mobileOtpVerified, setMobileOtpVerified] = useState(true);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {formData} = location.state || {};

  const verifyEmailOtp = async() => {
    const emailOtp = getValues('emailOtp');  // Get the value of emailOtp
    if (emailOtp) {
      console.log('Verifying Email OTP:', emailOtp);
      
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/verify-email-otp`, {companyEmail : formData.companyEmail, otp:emailOtp})
      console.log(response);
      if(response.status === 200){
        setEmailOtpVerified(true);
      }
      else{
        alert("invalid or expired otp")
      }
    } else {
      alert('Email OTP is empty');
    }
  }

  const verifyMobileOtp = () => {
    const mobileOtp = getValues('mobileOtp');  // Get the value of emailOtp
    if (mobileOtp) {
      console.log('Verifying Email OTP:', mobileOtp);
      // Add your OTP verification logic here
    } else {
      console.log('Email OTP is empty');
    }
  }

  useEffect(() => {
    if(mobileOtpVerified && emailOtpVerified){
      navigate('/home');
    }
  }, [mobileOtpVerified, emailOtpVerified]);
  return (
    <div className='w-full flex items-center justify-evenly h-[80vh] px-[5rem] gap-[10rem]'>
      <div className='w-1/3 p-5 '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut possimus nulla atque reiciendis. Error provident neque nam dicta laudantium dolore incidunt, cupiditate architecto tempore autem, excepturi mollitia quasi maxime, sed dolorum? Maxime molestiae animi impedit expedita maiores quod quos accusantium labore est magni debitis aperiam, ea quo nostrum recusandae !</p>
      </div>
      <div className="w-[35%] h-[90%] border-blue-300 border-[2px] flex flex-col gap-4 justify-center items-center py-3 rounded-md otp-verification-form">
        <div className='w-full text-center'>
          <h2 className='text-xl font-bold'>Verify OTP</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <form className='flex flex-col justify-center items-center gap-5 w-full'>

          <div className='flex flex-col w-[85%] gap-5 relative'>
            <MdEmail className='text-gray-300 text-2xl absolute top-[0.8rem] left-1' />

            <input
              type="text"
              placeholder="Email OTP"
              {...register('emailOtp', { required: 'Email OTP is required' })}
              className='border-2 border-gray-400 w-[100%] px-[2.7rem] h-[3rem] rounded-md bg-gray-100 text-black'
            />

            <RiVerifiedBadgeFill className={`text-green-500 text-2xl absolute top-[0.8rem] right-3 ${emailOtpVerified ? "block" : "hidden"}`} />

            {errors.emailOtp && <p>{errors.emailOtp.message}</p>}
            <button type="button" className={`w-[100%] bg-blue-700 p-2 rounded-md text-xl font-bold text-white hover:bg-blue-500 ${!emailOtpVerified ? "block" : "hidden"}`} onClick={verifyEmailOtp}>
              Verify Email OTP
            </button>

          </div>
          <div className='flex flex-col w-[85%] gap-5 relative'>
            <IoMdPhonePortrait className='text-gray-300 text-2xl absolute top-[0.8rem] left-1' />
            <input
              type="text"
              placeholder="Mobile OTP"
              {...register('mobileOtp', { required: 'Mobile OTP is required' })}
              className='border-2 border-gray-400 w-[100%] px-[2.7rem] h-[3rem] rounded-md bg-gray-100 text-black'
            />
            <RiVerifiedBadgeFill className={`text-green-500 text-2xl absolute top-[0.8rem] right-3 ${mobileOtpVerified ? "block" : "hidden"}`} />
            {errors.mobileOtp && <p>{errors.mobileOtp.message}</p>}
            <button type="button" className={`w-[100%] bg-blue-700 p-2 rounded-md text-xl font-bold text-white hover:bg-blue-500 ${!mobileOtpVerified ? "block" : "hidden"}`} onClick={verifyMobileOtp}>Verify Mobile OTP</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpVerification;
