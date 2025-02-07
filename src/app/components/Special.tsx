"use client";
import React, { useEffect, useState } from "react";

const SpecialOfferSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 149,
    hours: 23,
    minutes: 34,
    seconds: 44,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  const formatTime = (value: number): string =>
    value < 10 ? `0${value}` : `${value}`;

  return (
    <section className="relative bg-black text-white min-h-[80vh] flex flex-col items-center justify-between px-8 lg:px-20 space-y-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://gaming-workdo.myshopify.com/cdn/shop/files/offer-bg-img.png?v=1721386355')",
          filter: "brightness(0.5)",
        }}
      ></div>

      {/* Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center space-y-6 mt-6 pt-6">
        <h2 className="text-4xl font-bold">
          Get Special Price Up To <span className="text-green-500">50% OFF</span>
        </h2>

        {/* Countdown Timer */}
        <div className="mt-9 flex space-x-4">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hrs", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((time, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 px-4 py-2 rounded-lg shadow-lg border mt-9 border-green-500 text-white text-xl font-bold flex flex-col items-center"
            >
              <span>{formatTime(time.value)}</span>
              <span className="text-sm text-gray-400">{time.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Icons Section */}
      <div className="relative z-10 w-full text-center py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { iconUrl: "https://gaming-workdo.myshopify.com/cdn/shop/files/sevr-1.svg?v=1721388147", text: "Worldwide Shipping" },
            { iconUrl: "https://gaming-workdo.myshopify.com/cdn/shop/files/sevr-2.svg?v=1721388147", text: "Secure Payments" },
            { iconUrl: "https://gaming-workdo.myshopify.com/cdn/shop/files/sevr-3.svg?v=1721388147", text: "Money Back Guarantee" },
            { iconUrl: "https://gaming-workdo.myshopify.com/cdn/shop/files/sevr-4.svg?v=1721388147", text: "Online Customer Service" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.iconUrl} alt={item.text} className="w-12 h-12" />
              <p className="mt-2 text-lg text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOfferSection;
