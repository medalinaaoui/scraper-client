import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  text: string;
  poster: string;
  className?: string;
};
const SmallPoster = ({ className, text, poster }: Props) => {
  return (
    <div
      className={clsx(
        "lg:w-[11.625rem] w-14 sm:w-20 md:w-28 aspect-ratio-poster",
        className
      )}
    >
      <Image
        src={poster}
        alt={`${text} poster`}
        width={160}
        height={256}
        className="w-full h-full border-primary border-[0.10px] md:rounded-md rounded-sm cursor-pointer hover:outline-1 hover:outline hover:outline-primary"
      />
    </div>
  );
};
export default SmallPoster;
