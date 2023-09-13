import { Restaurant } from '~/types'
import Icon from './Icon'

type CarItemRestaurantProps = {
  restaurant: Restaurant
}

export const CarItemRestaurant = (props: CarItemRestaurantProps) => {
  return (
    <>
      <stacklayout className='px-4 bg-white py-2'>
        <gridlayout height='170'>
          <image
            height='170'
            stretch='aspectFill'
            width='100%'
            borderBottomLeftRadius='20'
            borderBottomRightRadius='20'
            borderTopLeftRadius='20'
            borderTopRightRadius='20'
            src={props.restaurant.img}
          >
            {' '}
          </image>
          {/* <Icon horizontalAlignment="right" verticalAlignment="top" icon="favorite" translateY="10" translateX="-10"></Icon> */}
        </gridlayout>
        <flexboxlayout className='justify-between items-center mt-1'>
          <stacklayout>
            <label className='font-bold text-base'>
              {props.restaurant.name}
            </label>
            <flexboxlayout className='mt-1'>
              <image
                height='20'
                width='20'
                stretch='aspectFill'
                src='~/assets/img/uber_one.png'
              >
                {' '}
              </image>
              <label className='text-gray ml-1'>
                Shipping costs €{props.restaurant.shippingCost}
              </label>
              <label className='text-gray ml-4'>
                {props.restaurant.estimatedTime}
              </label>
            </flexboxlayout>
          </stacklayout>
          <label
            className='font-bold text-base bg-gray rounded-full text-center'
            height='32'
            width='32'
          >
            {props.restaurant.score}
          </label>
        </flexboxlayout>
      </stacklayout>
    </>
  )
}
