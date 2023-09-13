import { Pager, PagerItem } from "@nativescript-community/ui-pager"
import StackSlideTransformation from "@/transformers/Transformer"
import { ImageCacheIt } from "@triniwiz/nativescript-image-cache-it"
import Home from "./components/Home"
import { Application, View } from "@nativescript/core"
import { render } from "@nativescript-community/solid-js"
import { document, makeListView, registerElement } from "dominative"
import { CollectionView } from "@nativescript-community/ui-collectionview"

ImageCacheIt.enableAutoMM()
registerElement("Pager", Pager)
registerElement("PagerItem", PagerItem)
registerElement("NSImg", ImageCacheIt)
registerElement("collectionview", makeListView(CollectionView, { force: true }))

Pager.registerTransformer("stack", StackSlideTransformation)

document.body.actionBarHidden = true
document.body.appendChild(document.createElement("ContentView") as any)

render(Home, document.body.firstElementChild)
const create = () => document
Application.run({ create })

declare global {
  interface HTMLCollectionViewElement extends HTMLListViewElement {}

  var HTMLCollectionViewElement: {
    prototype: HTMLCollectionViewElement
    new (): HTMLCollectionViewElement
  }

  interface HTMLCollectionViewElement extends HTMLListViewElement {}

  var HTMLCollectionViewElement: {
    prototype: HTMLCollectionViewElement
    new (): HTMLCollectionViewElement
  }
}

type ItemLoadingEvent<T> = {
    view: View
    item: T
    index: number
}


declare module "@nativescript-dom/solidjs-types/jsx-runtime" {
  export namespace JSX {
    interface IntrinsicElements {
      /**
       * Register custom library view
       */
      collectionview: Partial<HTMLListViewElementAttributes<HTMLCollectionViewElement>>

      /**
       * Register dominative elements
       */
      itemtemplate: Partial<
        HTMLViewBaseElementAttributes & {
          "on:createView": <T>(event: ItemLoadingEvent<T>) => void
          "on:itemLoading": <T>(event: ItemLoadingEvent<T>) => void
          key: string
        }
      >
      arrayprop: Partial<
        HTMLViewBaseElementAttributes & {
          key: string
        }
      >
      keyprop: Partial<
        HTMLViewBaseElementAttributes & {
          key: string
        }
      >
    }
  }
}
