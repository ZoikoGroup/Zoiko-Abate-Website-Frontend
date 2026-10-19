import React from "react";
import Image from "next/image";

export default function CorporateIdentitySection() {
  const headquarters = [
    {
      title: "Global Headquarters",
      address: "1401 21st Street, Suite R\nSacramento, CA 95811, USA",
      image: "/about/13.png",
      alt: "California city street view",
    },
    {
      title: "European Headquarters",
      address:
        "167–169 Great Portland Street, 5th Floor London W1W 5PF, United Kingdom",
      image: "/about/16.png",
      alt: "London Thames river and skyline view",
    },
  ] as const;

  return (
    <div className="bg-white w-full min-h-screen py-16 px-4 sm:px-8 lg:px-12 flex flex-col items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] flex flex-col space-y-12">
        {/* Top Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
          <div className="flex flex-col space-y-4 max-w-2xl">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[2px] bg-[#C85A40]"></span>
              <span className="text-[13px] uppercase tracking-[0.15em] text-[#6B5B52] font-medium">
                Corporate identity
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1E152A] leading-[1.1]">
              Our corporate home
            </h2>
          </div>
          <div className="max-w-md text-sm sm:text-base text-[#5A4D56] leading-relaxed">
            <p>
              Zoiko Abate is a platform being developed within Zoiko Group for
              operation by Zoiko Tech Inc., a Zoiko Group company. The Group is
              headquartered in California, United States, with its European
              headquarters in London.
            </p>
          </div>
        </div>

        {/* 2 Headquarters Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {headquarters.map((hq, index) => (
            <div
              key={index}
              className="bg-[#251A2F] rounded-3xl overflow-hidden shadow-2xl flex flex-col sm:flex-row items-stretch border border-white/10 min-h-[260px]"
            >
              {/* Left Side Image */}
              <div className="w-full sm:w-5/12 relative min-h-[200px] sm:min-h-full shrink-0">
                <Image
                  src={hq.image}
                  alt={hq.alt}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Right Side Dark Address Block */}
              <div className="w-full sm:w-7/12 p-8 flex flex-col justify-center space-y-3 text-white">
                <div className="flex items-center space-x-3">
                  <span className="w-5 h-[2px] bg-[#C85A40]"></span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {hq.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line pl-8">
                  {hq.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
