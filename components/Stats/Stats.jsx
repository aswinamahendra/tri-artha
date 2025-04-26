import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

const statsData = [
  {
    endCountNum: 20,
    endCountText: "+",
    text: "Years of Experience",
  },
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Satisfaction",
  },
  {
    endCountNum: 250,
    endCountText: "/year",
    text: "Successfull Orders",
  },
  {
    endCountNum: 50,
    endCountText: "+",
    text: "Clients Subscribe",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });

  return (
    <div ref={ref} className="bg-accent py-10 w-full">
      <div className="container mx-auto h-full">
        <div
          className="text-white flex flex-col items-center justify-between 
          xl:flex-row h-full gap-14 text-center xl:text-center"
        >
          {statsData.map((item, index) => {
            return (
              <div className="w-full" key={index}>
                <div className="text-5xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.5}
                      duration={3}
                    />
                  )}
                  <span>{item.endCountText}</span>
                </div>
                <p className="mt-5">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
