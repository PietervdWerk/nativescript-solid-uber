import { Dish } from '~/types'

type DishItemProps = {
  dish: Dish
  index: number
}

export const DishItem = (props: DishItemProps) => {
  return (
    <gridlayout
      columns='*, 80'
      className='items-center justify-between mt-4 px-3'
    >
      <stacklayout className='pr-3'>
        <label className='text-lg'>{props.dish.name}</label>
        <label textWrap className='text-xs mt-1' style='line-height: 1;'>
          {props.dish.description}
        </label>
      </stacklayout>
      <stacklayout col='1'>
        <image
          className=''
          borderBottomLeftRadius='8'
          borderBottomRightRadius='8'
          borderTopLeftRadius='8'
          borderTopRightRadius='8'
          width='80'
          height='80'
          stretch='aspectFill'
          // placeholderImageUri='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=110&ixid=MnwxfDB8MXxyYW5kb218MHx8aGFtYnVyZ2VyfHx8fHx8MTY5NDM3OTczOA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=110'
          // src={`https://source.unsplash.com/random/80x80?sig=${
          //   props.index + 1
          // }&hamburger,png`}
        />
      </stacklayout>
    </gridlayout>
  )
}
