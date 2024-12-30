import React from 'react'
import Image from './Image'
import Flex from './Flex'
import Text from './Text'
import { FaHeart,FaShoppingCart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";

const Product = ({prod,badge,price,proName}) => {
  return (
    <div className='relative group'>
            <Image source={prod}/>
        <Flex className={"justify-between py-4"}>
            <div><Text text={proName} as={"p"} className={"font-bold text-kala"}/></div>
            <div><Text text={price} as={"p"} className={"text-[15px] text-ash"}/></div>
        </Flex>

        <div>
            <Text text={badge} as={"p"} className={"text-[14px] text-white font-bold py-2 px-6 bg-kala absolute top-7 left-7"}/>
        </div>

        <div className='text-right p-5 bg-white w-full absolute bottom-14 opacity-0 group-hover:opacity-100 duration-200'>
            <Flex className={"items-center gap-x-5 justify-end"}>
              <Text text={"Add to wishlist"} as={"p"} className={"text-[15px] text-ash hover:text-kala hover:font-semibold"}/>
              <FaHeart className='text-[14px] text-kala'/>
            </Flex>
            <Flex className={"items-center gap-x-5 justify-end"}>
              <Text text={"Compare"} as={"p"} className={"text-[15px] text-ash hover:text-kala hover:font-semibold"}/>
              <FaArrowsRotate className='text-[14px] text-kala'/>
            </Flex>
            <Flex className={"items-center gap-x-5 justify-end"}>
              <Text text={"Add to cart"} as={"p"} className={"text-[15px] text-ash hover:text-kala hover:font-semibold"}/>
              <FaShoppingCart className='text-[14px] text-kala'/>
            </Flex>
        </div>
    </div>
  )
}

export default Product