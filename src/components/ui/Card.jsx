import React from "react";

const Card = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl flex flex-col items-center gap-4 p-8 shadow-[0px_32px_64px_-12px_rgba(0,_0,_0,_0.14)] flex flex-col pt-2 px-2 pb-6">
      <img
        className="self-stretch relative rounded-md max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6aaif6VBLI7FeglR42z8-Ij6J6S6fmxM16GmL99tJQ&s"
      />
      <div className="self-stretch flex flex-col py-0 px-4 items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="flex-1 relative tracking-[-0.02em] leading-[20px] font-semibold">
            Headline
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="rounded-[1.76px] bg-darkturquoise w-[26px] h-[26px] flex flex-col items-center justify-center">
              <img
                className="relative w-[11.26px] h-[9.75px]"
                alt=""
                src="/polygon-4.svg"
              />
            </div>
            <div className="rounded-[1.76px] bg-limegreen w-[26px] h-[26px] flex flex-col items-center justify-center">
              <img
                className="relative w-[13px] h-[13px]"
                alt=""
                src="/polygon-41.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-xs leading-[17px] text-text-body-light">{`Write an amazing description in this dedicated card section. Each word counts. `}</div>
      </div>
      <div className="self-stretch flex flex-row py-0 px-4 items-center justify-between text-xs text-blueviolet">
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start">
            <div className="rounded-md flex flex-col py-3 px-5 items-center justify-start">
              <div className="flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="relative w-3 h-3 hidden"
                  alt=""
                  src="/icon.svg"
                />
                <a className="relative leading-[17px] font-semibold"
                href=""
                >
                  See more
                </a>

              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-end">
          <img
            className="relative w-8 h-8 object-cover"
            alt=""
            src="/vector@2x.png"
          />
          <img
            className="relative w-8 h-8 object-cover ml-[-8px]"
            alt=""
            src="/vector1@2x.png"
          />
          <img
            className="relative w-8 h-8 object-cover ml-[-8px]"
            alt=""
            src="/vector2@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
