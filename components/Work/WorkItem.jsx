import Image from "next/image";
import { Badge } from "../ui/badge";

const WorkItem = ({ category, img, title }) => {
  return (
    <div>
      <div
        className="w-full h-[300px] p-8 rounded-[30px] flex items-center
      justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]"
      >
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>
        <Image
          src={img}
          fill
          priority
          quality={100}
          className="object-cover hover:scale-125 hover:rotate-12 transition-all duration-500"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3">{title}</h3>
        </div>
        
      </div>
    </div>
  );
};

export default WorkItem;
