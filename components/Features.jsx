import React from "react";
import { FiDownload } from "react-icons/fi";
import Pretitle from "./Pretitle";

const Features = () => {
  return (
    <section className="pt-[250px] md:flex-row items-center gap-12" id="about">
      <div className="container mx-auto">
        <Pretitle text="About Us" center />
        <h2 className="h2 mb-8 text-center">
          <span className="text-accent">25 Years of Trusted </span>in
          Calibration
        </h2>
        <div className="mt-20 flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
          <img
            className="h-[640px] object-contain mx-auto rounded-[20px]"
            src="/assets/features/features.png"
            alt="feature image"
          />
          <div className="flex-1 space-y-5">
            <h2 className="text-primary text-3xl font-bold leading-tight">
              We Provide Many Features You can use
            </h2>
            <p className="text-gray-500 leading-relaxed">
              You can Explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="space-y-8">
              <li className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/features/Checkmark.png"
                    className="h-[24px]"
                    alt="tick sign"
                  />
                </div>
                <span>Accredited and Licensed by KAN</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/features/Checkmark.png"
                    className="h-[24px]"
                    alt="tick sign"
                  />
                </div>
                <span>We can Adjustment and Setting if the tools out of tolerance</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/features/Checkmark.png"
                    className="h-[24px]"
                    alt="tick sign"
                  />
                </div>
                <span>Quarantee for 1 Year due to Recalibration</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/features/Checkmark.png"
                    className="h-[24px]"
                    alt="tick sign"
                  />
                </div>
                <span>Equipment and Tools ready to use from fresh start</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/features/Checkmark.png"
                    className="h-[24px]"
                    alt="tick sign"
                  />
                </div>
                <span>Able to cancel if out tolerance and without penalty</span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/features/Checkmark.png"
                    className="h-[24px]"
                    alt="tick sign"
                  />
                </div>
                <span>
                  Our Standards are Trusted and Recalibrate every year
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div>
                  <img
                    src="/assets/features/Checkmark.png"
                    className="h-[24px]"
                    alt="tick sign"
                  />
                </div>
                <span>Great Accuracy beyond Tolerance and Settings</span>
              </li>
              <li className="flex gap-5 justify-center">
                <a
                  className="btn gap-2 flex items-center rounded-[50px] btn-accent w-[198px] h-[60px] text-white font-semibold hover:scale-110 transition duration-300"
                  href="/assets/LingkupIndustri.pdf"
                  target="_blank"
                >
                  Lingkup Kalibrasi
                  <FiDownload className="scale-125 mt-0" />
                </a>
                <a
                  className="btn gap-2 flex items-center rounded-[50px] btn-accent w-[180px] h-[60px] text-white font-semibold hover:scale-110 transition duration-300"
                  href="/assets/LingkupMedis.pdf"
                  target="_blank"
                >
                  Lingkup Medic
                  <FiDownload className="scale-125 mt-0" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
