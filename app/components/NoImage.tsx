import clsx from "clsx";
import Link from "next/link";
import { FaRegFileImage } from "react-icons/fa";

type Props = {
  className?: string;
  serie?: boolean;
  id: number;
};
const SmallNoImage = ({ className, serie, id }: Props) => {
  return (
    <div
      className={clsx(
        "lg:w-[11.625rem] w-14 bg-maincards sm:w-20 md:w-28 aspect-ratio-poster md:rounded-md rounded-sm flex justify-center items-center",
        className
      )}
    >
      <span className="text-divider text-3xl lg:text-8xl">
        <FaRegFileImage />
      </span>
    </div>
  );
};
const NoImage = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "lg:w-48 xl:w-64 sm:w-28 md:w-36 w-18 aspect-ratio-poster bg-maincards md:rounded-md rounded-sm flex justify-center items-center",
        className
      )}
    >
      <span className="text-divider text-4xl lg:text-8xl">
        <FaRegFileImage />
      </span>
    </div>
  );
};

export { SmallNoImage, NoImage };
