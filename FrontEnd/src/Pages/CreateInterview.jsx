import { useForm } from 'react-hook-form';
import { FaHome } from "react-icons/fa";
import './style.css'
import { Link } from 'react-router-dom';
const CreateInterview = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <div className="container w-full flex pt-5 gap-2">
      <div className='w-[8%] h-[85vh] flex flex-col items-center border-r-2 border-black'>
        <div>
          <Link to="/home">
            <FaHome className='text-3xl' />
          </Link>
        </div>
      </div>
      <div className="form-container w-[60%] h-[90%] flex flex-col gap-4 justify-center items-center py-3 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-end items-end gap-5 w-full'>
          <table className="table-auto w-full text-right">
            <tbody>
              {/* Job Title */}
              <tr className="form-group">
                <td className="w-1/3 h-full"><label>Job Title</label></td>
                <td className="p-3 w-[80%]">
                  <input
                    type="text"
                    placeholder="Enter Job Title"
                    {...register('jobTitle', { required: 'Job title is required' })}
                    className="border-2 border-gray-400 w-full px-4 h-[3rem] rounded-md bg-white text-black"
                  />
                  {errors.jobTitle && <p className="error text-red-500">{errors.jobTitle.message}</p>}
                </td>
              </tr>

              {/* Job Description */}
              <tr className="form-group">
                <td className="p-3 w-1/3 "><label>Job Description</label></td>
                <td className="p-3 w-[80%]">
                  <textarea
                    placeholder="Enter Job Description"
                    {...register('jobDescription', { required: 'Job description is required' })}
                    className="border-2 border-gray-400 w-full px-4 py-2 h-[14rem] rounded-md bg-white text-black"
                  ></textarea>
                  {errors.jobDescription && <p className="error text-red-500">{errors.jobDescription.message}</p>}
                </td>
              </tr>

              {/* Experience Level */}
              <tr className="form-group">
                <td className="p-3 w-1/3"><label>Experience Level</label></td>
                <td className="p-3 w-[80%]">
                  <select
                    {...register('experienceLevel', { required: 'Experience level is required' })}
                    className="border-2 border-gray-400 w-full px-4 h-[3rem] rounded-md bg-white text-black"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="junior">Junior</option>
                    <option value="mid">Mid-Level</option>
                    <option value="senior">Senior</option>
                  </select>
                  {errors.experienceLevel && <p className="error text-red-500">{errors.experienceLevel.message}</p>}
                </td>
              </tr>

              {/* Add Candidate */}
              <tr className="form-group">
                <td className="p-3 w-1/3"><label>Add Candidate</label></td>
                <td className="p-3 w-[80%]">
                  <input
                    type="email"
                    placeholder="xyz@gmail.com"
                    {...register('candidateEmail', {
                      required: 'Candidate email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email format'
                      }
                    })}
                    className="border-2 border-gray-400 w-full px-4 h-[3rem] rounded-md bg-white text-black"
                  />
                  {errors.candidateEmail && <p className="error text-red-500">{errors.candidateEmail.message}</p>}
                </td>
              </tr>

              {/* End Date */}
              <tr className="form-group">
                <td className="p-3 w-1/3"><label>End Date</label></td>
                <td className="p-3 w-[80%]">
                  <input
                    type="date"
                    {...register('endDate', { required: 'End date is required' })}
                    className="border-2 border-gray-400 w-full px-4 h-[3rem] rounded-md bg-white text-black"
                  />
                  {errors.endDate && <p className="error text-red-500">{errors.endDate.message}</p>}
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className='w-[15%] bg-blue-700 p-2 rounded-md text-xl font-bold text-white hover:bg-blue-500 mr-3'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default CreateInterview;
