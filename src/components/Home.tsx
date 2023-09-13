import type { CollectionView } from "@nativescript-community/ui-collectionview"
import { Header } from "./Header"
import { TextSearch } from "./TextSearch"
import { View } from "@nativescript/core/ui"
import { onScrollDirection } from "~/ScrollUtil"
import { CarItemRestaurant } from "./CarItemRestaurant"
import { Utils } from "@nativescript/core"
import { CarItemOption } from "./CarItemOption"
import { DataItem } from "~/types"
import { Component, createSignal } from "solid-js"
// import { items } from "~/MockData"

const Home = () => {
  let headerViewRef: HTMLStackLayoutElement | ((el: HTMLStackLayoutElement) => void) | undefined
  const durationHeaderAnimation = 250
  let heightHeader = 0
  let animating = false
  let collapsed = false

  function loadedCollectionView(args: { object: CollectionView }) {
    const header = (headerViewRef as any).nativeView as View
    heightHeader = 0
    header.eachChildView((child) => {
      const marginBottom = Utils.isNumber(child.marginBottom)
        ? child.marginBottom
        : child.marginBottom
        ? child.marginBottom
        : 0
      const marginTop = Utils.isNumber(child.marginTop)
        ? child.marginTop
        : child.marginTop
        ? child.marginTop
        : 0
      heightHeader +=
        child.getActualSize().height + (marginBottom as number) + (marginTop as number)
      return true
    })
    args.object.translateY = heightHeader + 5
  }
  const itemTemplate = (args: { item: DataItem }) => {
    return args.item.type
  }
  const animateTranslateY = (view: View, y: number, opacity = 1) =>
    view.animate({
      translate: {
        y,
        x: 0,
      },
      opacity,
      duration: durationHeaderAnimation,
    })

  const onScroll = (args: { object: CollectionView; scrollOffset: number }) => {
    const collection = args.object

    onScrollDirection(args, {
      onTop: () => {
        if (!animating && collapsed) {
          const view = (headerViewRef as any).nativeView as View
          animating = true
          collapsed = false
          animating = true
          animateTranslateY(collection, heightHeader + 5)
          animateTranslateY(view, 0, 1).then(() => {
            animating = false
          })
        }
      },
      onBottom: () => {
        const view = (headerViewRef as any).nativeView as View
        if (!animating && view.translateY == 0) {
          animating = true
          collapsed = true
          animateTranslateY(collection, 0)
          animateTranslateY(view, -heightHeader + 5, 0).then(() => {
            animating = false
          })
        }
      },
    })
  }

  const [items, setItems] = createSignal([0])

  return (
    <frame>
      <page actionBarHidden="true" androidStatusBarBackground="white">
        <gridlayout rows="auto">
          <stacklayout ref={headerViewRef} className="px-4 py-1">
            <Header className="my-2" />
            <TextSearch className="mt-4  pb-2" />
          </stacklayout>
        </gridlayout>
      </page>
    </frame>
  )
}

export default Home

// <gridlayout rows="auto">
//   <stacklayout ref={headerViewRef} className="px-4 py-1">
//     <Header className="my-2" />
//     <TextSearch className="mt-4  pb-2" />
//   </stacklayout>

//   <collectionview layoutChanged={loadedCollectionView} on:scroll={onScroll} items={items} colWidth="100%"
//     itemTemplateSelector={itemTemplate} className="bg-gray" height="100%"
//     iosOverflowSafeArea="true" ios:marginTop="1">
//               <arrayprop key="itemTemplates">
//     <For each={templates}>
//       {(key) => (
//         <itemtemplate
//           key={key}

//       <stacklayout className="android:pb-3 ios:pb-2">
//         <CarItemRestaurant restaurant={item} index={index} />
//       </stacklayout>

//       <stacklayout className="android:pb-3 ios:pb-2">
//         <stacklayout className="px-4 android:py-3 ios:py-2 bg-white text-center" orientation="horizontal">
//           <CarItemOption v-for="(option, i) in item.options" :key="i" :index="i" height="95" width="28%"
//             :item="option"></CarItemOption>
//         </stacklayout>
//       </stacklayout>

//   </collectionview>
// </gridlayout>
