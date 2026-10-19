import { MapPin } from "lucide-react";
import { OFFICES } from "./data";

export default function FooterOffices() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {OFFICES.map((office) => (
        <address
          key={office.title}
          className="rounded-[14px] border border-white/10 bg-[#FFFFFF0D] md:max-h-[200px] p-7 not-italic"
        >
          <div className="flex items-center gap-2">
            <MapPin
              className="h-4 w-4 shrink-0 text-[#F0957F]"
              aria-hidden="true"
            />
            <h3 className="text-[14px] font-semibold text-white">
              {office.title}
            </h3>
          </div>
          <p className="mt-5 text-[13px] leading-[1.9] text-[#FFFFFFBF]">
            {office.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </address>
      ))}
    </div>
  );
}
