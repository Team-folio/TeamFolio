import React from "react";

function Hero() {
  return (
    <div className="self-stretch bg-theme-primary-default overflow-hidden flex flex-col py-10 px-[265px] items-center justify-start relative gap-[80px] text-center text-26xl font-footer-logo">
      <div className="self-stretch overflow-hidden flex flex-col py-[2.5rem] px-[16.56rem] items-center  text-center text-[2.81rem] font-footer-logo">
        <div className="rounded-2xl w-[60rem] flex flex-col p-[2rem] box-border items-center justify-start z-[0]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.5rem]">
            <b className="relative inline-block w-[56.88rem] text-white">
              <p className="m-0">{`Collaborate with your team and `}</p>
              <p className="m-0">showcase your projects to the world</p>
            </b>
            <div className="self-stretch flex flex-row items-center justify-center text-left text-[0.75rem] font-copyright-text">
              <div className="flex-1 flex flex-col py-[1.5rem] px-[1.44rem] items-center justify-start">
                <a
                  href="https://example.com" // Replace this with the URL of the website you want to link to
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                  className="leading-[17px] uppercase font-semibold self-stretch rounded-45xl flex flex-row py-3 px-6 items-center justify-center border-[2px] border-solid border-background  gap-8 self-stretch  flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center  bg-background w-[400px]  text-theme-primary-default font-bold"
                >
                  Create a new project
                </a>
              </div>
              <div className="flex-1 flex flex-col py-[1.5rem] px-[1.44rem] items-center justify-start">
                <a
                  href="https://example.com" // Replace this with the URL of the website you want to link to
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                  className="leading-[17px] uppercase font-semibold self-stretch rounded-45xl flex flex-row py-3 px-6 items-center justify-center border-[2px] border-solid border-background h-38 rounded-full gap-8 self-stretch rounded-64 flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center border- border-[2px] border-solid border-white text-white font-bold"
                >
                  Find Talent
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
