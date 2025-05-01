import Image from "next/image";
import { FaCrown } from "react-icons/fa";

const CompanyLogo = () => {
  return (
    <div className="bg-accent relative w-full py-9 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-8 rounded-[25px] bg-blue-400 w-[250px] h-[40px] gap-2 text-white flex font-semibold items-center justify-center">
            <FaCrown className="text-yellow-400"/>
            Our Company trusted by
          </p>
          <div className="whitespace-nowrap animate-scroll">
            {[...Array(2)].map((_, containerIndex) => (
              <div
                key={containerIndex}
                className="inline-flex items-center gap-[78px] mr-[78px]"
              >
                {Array.from({ length: 7 }).map((_, index) => (
                  <div className="inline-block" key={index}>
                    <Image
                      src={`/assets/company/com-${index + 1}.png`}
                      alt="company"
                      height={250}
                      width={250}
                      className="min-w-[100px] w-[150px] h-[50px] object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
