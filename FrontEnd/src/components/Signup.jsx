import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import './style.css'
function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    console.log(data);
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/register`, data);
    console.log(response);
    navigate('/otp-verification', { state: { formData: data } });
  };

  return (
    <div className='w-full flex items-center justify-evenly h-[80vh] px-[5rem] gap-[10rem]'>
      <div className='w-1/3 p-5 '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ut possimus nulla atque reiciendis. Error provident neque nam dicta laudantium dolore incidunt, cupiditate architecto tempore autem, excepturi mollitia quasi maxime, sed dolorum? Maxime molestiae animi impedit expedita maiores quod quos accusantium labore est magni debitis aperiam, ea quo nostrum recusandae !</p>
      </div>
      <div className="w-[35%] h-[90%] border-blue-300 border-[2px] flex flex-col gap-4 justify-center items-center py-3 rounded-md">
        <div className='w-full text-center'>
          <h2 className='text-xl font-bold'>Sign Up</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center gap-5 w-full'>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: 'Name is required' })}
            className='border-2 border-gray-500 w-[90%] px-4 h-[3rem] rounded-md bg-gray-200 text-black'
          />
          {errors.name && <p>{errors.name.message}</p>}

          <input
            type="text"
            placeholder="Phone no."
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits'
              }
            })}
            className='border-2 border-gray-500 w-[90%] px-4 h-[3rem] rounded-md bg-gray-200 text-black'
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}

          <input
            type="text"
            placeholder="Company Name"
            {...register('companyName', { required: 'Company Name is required' })}
            className='border-2 border-gray-500 w-[90%] px-4 h-[3rem] rounded-md bg-gray-200 text-black'
          />
          {errors.companyName && <p>{errors.companyName.message}</p>}

          <input
            type="email"
            placeholder="Company Email"
            {...register('companyEmail', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'
              }
            })}
            className='border-2 border-gray-500 w-[90%] px-4 h-[3rem] rounded-md bg-gray-200 text-black'
          />
          {errors.companyEmail && <p>{errors.companyEmail.message}</p>}

          <input
            type="number"
            placeholder="Employee Size"
            {...register('employeeSize', { required: 'Employee Size is required' })}
            className='border-2 border-gray-500 w-[90%] px-4 h-[3rem] rounded-md bg-gray-200 text-black'
          />
          {errors.employeeSize && <p>{errors.employeeSize.message}</p>}
          <p className="terms-conditions">By clicking on proceed you will accept our Terms & Conditions</p>
          <button type="submit" className='w-[90%] bg-blue-700 p-2 rounded-md text-xl font-bold text-white hover:bg-blue-500'>Proceed</button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
