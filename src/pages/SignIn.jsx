import React from 'react';
import SignInUpView from "../components/SignInUpView";
import SignInForm from '../components/forms/SignInForm';
import background_image from "../assets/img/student-849822_1280.jpg";
const SignIn = () => {
  const form = () => {
    return <SignInForm/>;
  }
  return (
    <SignInUpView
      form={form}
      image={background_image}
    />
  )
}

export default SignIn