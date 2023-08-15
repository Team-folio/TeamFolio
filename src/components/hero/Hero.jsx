import React from 'react'

function Hero() {
  return (
      <div className="bg-purple-600 p-40 pl-265 h-1/8  w-1440">
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
                                  className="h-38 rounded-md  gap-8 self-stretch rounded-64 flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center border-[2px] border-solid  bg-white text-purple-900 font-bold">
                                  Create a new project
                              </a>
                          </div>
                          <div className="flex-1 flex flex-col py-[1.5rem] px-[1.44rem] items-center justify-start">
                              <a
                                  href="https://example.com" // Replace this with the URL of the website you want to link to
                                  target="_blank" // Opens the link in a new tab
                                  rel="noopener noreferrer" // Recommended for security reasons when using target="_blank"
                                className=" h-38 rounded-md gap-8 self-stretch rounded-64 flex flex-row py-[0.75rem] px-[1.5rem] items-center justify-center border-[2px] border-solid  text-white font-bold">
                                  Create a new project
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="absolute my-0 mx-[!important] top-[12.38rem] left-[74.03rem] rounded-[50%] bg-turquoise w-[18.94rem] h-[18.94rem] z-[2]" />
          </div>
      </div>
  )
}

export default Hero