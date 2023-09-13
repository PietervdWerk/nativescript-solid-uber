import { JSX } from "@nativescript-dom/solidjs-types/jsx-runtime"
import { ContentView } from "@nativescript/core"
import { Accessor, children, createSignal, getOwner, Owner, runWithOwner } from "solid-js"

type CollectionViewProps<T extends {}> = {
  renderItem: (props: { item: Accessor<T>; index: Accessor<number> }) => JSX.Element
  items: T[]
} & Omit<
  JSX.IntrinsicElements["collectionview"],
  "itemTemplateSelector" | "items" | "itemTemplates" | "itemTemplate"
>

export const DynamicList2 = <T extends {}>(props: CollectionViewProps<T>): JSX.Element => {
  const owner = getOwner()
  const { items, renderItem, ...restProps } = props
  return (
    <contentview
      style={{
        width: "100%",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <collectionview
        {...restProps}
        items={{
          length: props.items?.length,
          getItem(index: number) {
            return {
              index: props.items?.[index],
            }
          },
        }}
      >
        <arrayprop key="itemTemplates">
          <itemtemplate
            on:itemLoading={(event) => {
              const update_solid_context = (event.view as any).__update_solid_context
              if (update_solid_context) {
                update_solid_context(event.item, event.index)
              } else {
                runWithOwner(owner as Owner, () => {
                  const [item, setItem] = createSignal(event.item)
                  const [index, setIndex] = createSignal<number>(event.index || 0)
                  const element = children(() => renderItem({ item, index }))

                  ;(event.view as ContentView).content = element() as never
                  ;(event.view as any).__update_solid_context = (
                    item: any,
                    index: number,
                  ) => {
                    setItem(item)
                    setIndex(index)
                  }
                })
              }
            }}
            on:createView={(event: any) => {
              event.view = document.createElement("ContentView") as any
            }}
          />
        </arrayprop>
      </collectionview>
    </contentview>
  )
}
