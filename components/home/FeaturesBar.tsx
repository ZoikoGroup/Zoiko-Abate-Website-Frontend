import React from "react";
import { Home, Lock, User, FileText } from "lucide-react";

export default function FeaturesBar() {
  const features = [
    {
      icon: Home,
      title: "Organizational prevention",
    },
    {
      icon: Lock,
      title: "Privacy-controlled reporting",
    },
    {
      icon: User,
      title: "Accountable human decisions",
    },
    {
      icon: FileText,
      title: "Verifiable control records",
    },
  ];

  return (
    <div className="bg-[#251A2F] w-full py-8 px-4 sm:px-8 lg:px-12 flex items-center justify-center font-sans">
      <div className="w-full max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-xl transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#FFFFFF14] flex items-center justify-center shrink-0 shadow-inner">
                <IconComponent className="w-6 h-6 text-[#F0957F]" />
              </div>
              <span className="text-white font-medium tracking-tight">
                {feature.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
