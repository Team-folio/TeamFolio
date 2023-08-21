import React, { useState } from 'react';
import Divider from '../ui/Divider';
import googleIcon from '../../assets/img/google_300221.png';
import facebookIcon from '../../assets/img/facebook.svg.png';
import linkedinIcon from '../../assets/img/linkedin.png';
import { Link } from 'react-router-dom';
import SocialButton from '../ui/SocialButton';
import Checkbox from '../ui/Checkbox';
import InputField from '../ui/InputField';

function SignUpForm() {
    // State to store form data
    const [data, setData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false,
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div>
            {/* Sign Up Header */}
            <h1 className='font-bold text-2xl mb-4'>SIGN UP</h1>
            <p className='font-light text-slate-500 text-sm mb-10'>
                Please fill in your details to create your account.
            </p>

            {/* Form */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <InputField
                    onChange={handleChange}
                    name='email'
                    type='text'
                    placeholder='Email'
                />
                <InputField
                    onChange={handleChange}
                    name='username'
                    type='text'
                    placeholder='Username'
                />
                <InputField
                    onChange={handleChange}
                    name='password'
                    type='password'
                    placeholder='Password'
                />
                <InputField
                    onChange={handleChange}
                    name='confirmPassword'
                    type='password'
                    placeholder='Confirm your password'
                />
                <Checkbox name={'agreeTerms'} onChange={handleChange} />
                <div>
                    <button
                        className='w-full my-5 flex-shrink-0 bg-purple-500 hover:bg-purple-400 border-purple-500 hover:border-purple-400 text-sm font-bold border-4 text-white py-3 px-2 rounded'
                        type='submit'
                    >
                        SIGN UP
                    </button>
                </div>
            </form>

            {/* Divider */}
            <Divider>or</Divider>

            {/* Social Media Buttons */}
            <div className='flex justify-center items-center w-full'>
                <div className='flex space-x-4'>
                    <SocialButton icon={googleIcon} alt={'google'} onClick={(e) => console.log('#')} />
                    <SocialButton icon={facebookIcon} alt={'facebook'} onClick={(e) => console.log('#')} />
                    <SocialButton icon={linkedinIcon} alt={'linkedin'} onClick={(e) => console.log('#')} />
                </div>
            </div>

            {/* Redirect to Login */}
            <div className='flex justify-center items-center w-full my-10'>
                <p className='text-sm'>
                    Already have an account? <Link className='text-purple-500' to='/signin'>Log In</Link>
                </p>
            </div>
        </div>
    );
}

export default SignUpForm;
