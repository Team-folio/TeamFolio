import React from 'react';
import SignInUpView from '../components/SignInUpView';
import SignUpForm from '../components/forms/SignUpForm';

import background_image from "../assets/img/job-5382501_1280.jpg";
const SignUp = () => {
  return(
  <SignInUpView
    form={<SignUpForm/>}
    image={background_image}
  />
  )
}

export default SignUp