import type { HTMLGridLayoutElementAttributes } from "@nativescript-dom/solidjs-types/jsx-runtime"
import Icon from "./Icon"

type TextSearchProps = {} & Partial<HTMLGridLayoutElementAttributes<HTMLGridLayoutElement>>


export const TextSearch = (props: TextSearchProps) => {
  return (
    <gridlayout height="55" {...props}>
      <textfield
        hint="Search in Uber Eats"
        height="55"
        className="bg-gray rounded-full px-14 font-bold"
      />
      <Icon
        horizontalAlignment="left"
        icon="search"
        color="black"
        className="ml-4 rounded-full text-center "
        fontSize="32"
      />
      <Icon
        horizontalAlignment="right"
        className="mr-4"
        icon="page_info"
        color="black"
        fontSize="32"
      />
    </gridlayout>
  )
}
