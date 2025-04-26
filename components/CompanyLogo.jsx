import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="bg-accent relative w-full py-10 overflow-hidden">
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
                  height={150}
                  width={150}
                  className="min-w-[100px] w-[150px] h-[50px] object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
