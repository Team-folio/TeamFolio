import authImage from "../assets/authImage.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/img/google_300221.png";
import facebookIcon from "../assets/img/facebook.svg.png";
import linkedinIcon from "../assets/img/linkedin.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const handleShowTerms = (e) => {
    e.stopPropagation();
    window.alert("show terms");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(
      `Email : ${formData.email}, password: ${formData.password} **** add login logic`
    );
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleGoSignup = () => {
    navigate("signup");
  };
  const handleAuth = () => {
    window.alert("auth logic for other sites ");
  };
  return (
    <section className="flex translate-y-16 h-[93vh] w-full relative">
      {/* desktop image----------------------- */}
      <img
        src={authImage}
        alt="auth bg"
        className="hidden lg:block w-[38%] object-cover"
      />
      {/* form----------------------------------- */}
      <form
        className="flex flex-col gap-3 w-full px-10 py-10 md:px-28 md:py-24"
        onSubmit={handleSubmit}
      >
        {/*form heading------ */}
        <h1 className="uppercase font-bold text-2xl lg:text-3xl">sign in</h1>
        <p className="text-gray-400 mb-6 text-[0.85rem] lg:text-[1.1rem]">
          Please fill your detail to access your account.
        </p>
        {/* inputs------ */}
        <input
          required
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="email"
          className="border-2 rounded-md border-purple-400 w-full px-3 py-2 lg:py-[1.15rem] mb-7"
          placeholder="Example@gmail.com"
        />

        <input
          required
          name="password"
          onChange={handleChange}
          value={formData.password}
          type="password"
          placeholder="***********"
          className="border-2 rounded-md border-purple-400 w-full px-3 py-2 lg:py-[1.15rem] mb-8"
        />
        {/* check box ------*/}
        <div
          className="cursor-pointer mb-10 flex lg:items-center items-start "
          onClick={handleCheckbox}
        >
          <input type="checkbox" className="hidden" checked={isChecked} />
          {isChecked ? (
            <img
              className="inline-block"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAX5JREFUSEtjZKAxYKSx+Qz0tWBFyE9/BsZ/HUBfaZDps+uMjIwl4as4tsH0o/hgRej3J0AJaTINh2m7F7GaUxmXBf9BEkAFZAUd0IEY+tF9MIIsWBX6WfTff9aIiDUck2HhTbUgWhX6n+0vw48DwPC1/M/4vyhyFVc/yBKqWbA85PtiRkaGGKCZXxmYmEwjVrJfJ9uClSHfyhgZ/y0KW83zAmLIj3wGhv8TgMz/wDTvg5zmSfbBipAfWQyM/6cCDbv9688fGxYWVn0mhv87gXxGhv//CyPWcIEsggOSLVgc9FWSlZnpANAENSAGBsN/KaDZ/EDjZ0as4sxAz5AkWwAyYFnkF3GmP8zHgEwlEB+YUQ4yM3A4h61m/EsVC9As+fuHjcMkZinjJ2zFCVk+gBm0KvSLxD8mFu6IlRx3cZVVFFmAy1CKIpkYQ0m14CFQgxypBqOpfwAsjRVhYqilKaTC6QRKqpNnyf9LjIxMlTgrHPIMxa+LrIqFFIfQ3AIAfKrVGWB3dvYAAAAASUVORK5CYII="
            />
          ) : (
            <img
              className="inline-block"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAV1JREFUSEtjZKAxYKSx+Qz0taC7u9v/////HUBfaZDps+tAfSVlZWXbYPpRfNDV1fUEKCFNpuEwbfeAFijjsuA/SAKogKygAzoQQz+6D0aQBW1tbaIsLCwRwOCcDAtvqgVRQ0MDGxcX1wGgwZZAXAS0pB9kCdUsABq0GGheDBB/BSZr0/LyclDyJM8CoGFlQL2LgK58ATUkH0hPAGJQgvBBTvMk+6CzszOLkZFxKtCg20Da5t+/f/pAeieQD6QYC0tLS0EWwQHJFvT390v++vXrANAwNaApoGCQAmJ+IJ4JdHkGeoYk2QKQAa2treKsrKzHgEwlqIEHFRQUnMPCwv5SxQI0S/5ycHCY5OXlfUI3nOxIhhkE9L4EkM0NDJq72Ayn2AJchlIUycQYSqoFD4Ea5Eg1GE39A2AwKsLEUEpTaIXTCZRUJ9OSS0B9lTgrHDINxauNrIqFFIfQ3AIAao/MGbAhhnYAAAAASUVORK5CYII="
            />
          )}
          <span className="text-md lg:text-lg ml-2 text-gray-400">
            By clicking this checkbox, you agree to these{" "}
            <strong
              className="text-purple-500 text-sm lg:text-base hover:opacity-50"
              onClick={handleShowTerms}
            >
              Terms and Services
            </strong>
          </span>
        </div>
        {/* submit btn --------*/}
        <button
          type="submit"
          className="hover:opacity-80 uppercase  bg-purple-500 text-white rounded-md py-2 lg:py-3 text-md lg:text-xl"
        >
          sign in
        </button>
        {/* divider------------------------------------------------------ */}
        <div className="flex justify-center items-center gap-6 mt-7 mb-6">
          <hr className="w-full" />
          <span className="text-gray-400">or</span>
          <hr className="w-full" />
        </div>
        {/* Auth-------------------------------------------------------- */}
        <div className="icons flex justify-center gap-12 mt-2">
          <img
            className="w-[2rem] lg:w-[2.5rem] hover:opacity-50 cursor-pointer"
            onClick={handleAuth}
            src={googleIcon}
          />
          <img
            className="w-[2rem] lg:w-[2.5rem] hover:opacity-50 cursor-pointer"
            onClick={handleAuth}
            src={facebookIcon}
          />
          <img
            className="w-[2rem] lg:w-[2.5rem] hover:opacity-50 cursor-pointer"
            onClick={handleAuth}
            src={linkedinIcon}
          />
        </div>
        {/* text btn -- navigates to sign up */}
        <span
          onClick={handleGoSignup}
          className="textBtn mt-7 font-semibold text-gray-500 mx-auto cursor-pointer hover:opacity-50 pb-10 lg:pb-0"
        >
          {`Don't have an account?`}
          <strong className="text-purple-500 ml-1 font-medium">Sing up</strong>
        </span>
      </form>
    </section>
  );
};

export default SignIn;
