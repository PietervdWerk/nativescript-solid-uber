import type { HTMLGridLayoutElementAttributes } from "@nativescript-dom/solidjs-types/jsx-runtime"
import Icon from "./Icon"
import { Color } from "@nativescript/core"

type HeaderProps = {} & Partial<HTMLGridLayoutElementAttributes<HTMLGridLayoutElement>>

export const Header = (props: HeaderProps) => {
  return (
    <gridlayout columns="*, auto" height="50" {...props}>
      <stacklayout col="0">
        <label className="text-gray text-lg " text="Deliver now"></label>
        <stacklayout orientation="horizontal">
          <label className="text-lg" text="Deliver now to this address"></label>
          <Icon
            icon="expand_more"
            color={new Color("black")}
            className="text-center"
            fontSize={22}
          />
        </stacklayout>
      </stacklayout>
      <stacklayout col="1" className="rounded-full bg-gray" orientation="horizontal" height="40">
        <Icon
          icon="takeout_dining"
          color={new Color("white")}
          className="bg-black rounded-full text-center"
          fontSize={22}
          width={45}
        />
        <Icon
          icon="directions_run"
          color={new Color("black")}
          className="rounded-full text-center "
          fontSize={22}
          width={45}
        />
      </stacklayout>
    </gridlayout>
  )
}
