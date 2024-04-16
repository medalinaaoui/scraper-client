import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={clsx(
        "w-60 sm:w-80 h-10 px-2 placeholder-divider border-none outline-none",
        className
      )}
    />
  );
}
