import FooterBottom from "./FooterBottom";
import FooterBrand from "./FooterBrand";
import FooterColumns from "./FooterColumns";
import FooterOffices from "./FooterOffices";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#1B1323] font-sans text-white">
      <div
        className="h-[5px] w-full bg-gradient-to-r from-[#899591] to-[#899591]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[60px]">
        <div className="py-16 lg:py-20">
          <FooterColumns />
        </div>

        <div className="grid grid-cols-1 gap-12 border-t border-white/10 py-14 lg:grid-cols-[1fr_1.1fr_0.55fr] lg:gap-10">
          <FooterBrand />
          <FooterOffices />
          <FooterSocial />
        </div>

        <div className="border-t border-white/10 py-10">
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
