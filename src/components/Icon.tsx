import { HTMLLabelElementAttributes } from "@nativescript-dom/solidjs-types/jsx-runtime";

type IconProps = {
  icon: string;
} & Partial<HTMLLabelElementAttributes>;;

const Icon = (props: IconProps) => {
  const { icon, className, ...restProps } = props;
  return (
    <label className={`m-icon-round text-white ${className}`} {...restProps}>
      {props.icon}
    </label>
  );
};

export default Icon;
