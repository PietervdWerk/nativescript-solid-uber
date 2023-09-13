import { FoodOption } from '~/types'

type CarItemOptionProps = {
  item: FoodOption
}

export const CarItemOption = (props: CarItemOptionProps) => {
  return (
    <template>
      <stacklayout className='bg-gray mx-1 py-2 rounded-2xl flex-1'>
        <image
          width='60'
          height='60'
          stretch='aspectFill'
          src={props.item.img}
        >
          {' '}
        </image>
        <label className=' text-base text-center text-black'>
          {props.item.title}
        </label>
      </stacklayout>
    </template>
  )
}
