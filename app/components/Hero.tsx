import Light from "@/public/Union.svg";
import Logo from "@/public/7th.png";
import Image from "next/image";
import Card from "./Card";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-around">
      {/* <canvas className="min-h-screen w-1/2 anahowa absolute left-0 right-0 mx-auto -z-1 "></canvas> */}
      {/* <div className="min-h-screen w-1/2 absolute left-0 right-0 mx-auto -z-1">
        <Image
          src={Light}
          alt=""
          width={400}
          height={800}
          className="h-full w-full object-cover"
        />
      </div> */}
      <div className="w-24 aspect-square ">
        <Image
          src={Logo}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </div>

      <h1 className="flex text-center">الفن السابع</h1>

      <Card />

      <span className="text-sm">links here</span>
    </div>
  );
};
export default Hero;
