import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import { IoReorderTwoOutline } from "react-icons/io5";
import { FaCaretDown,FaUser,FaShoppingCart,FaSearch } from "react-icons/fa";

const AfterNav = () => {
    const [drop, setdrop] = useState(false);

  return (
    <div className='bg-[#F5F5F3]'>
        <Container>
        <Flex className={"justify-between items-center py-5 relative"}>
            <div>
                <Flex className={"gap-x-1"}>
                    <IoReorderTwoOutline onClick={()=>setdrop(!drop)} className='text-2xl'/>
                    {drop && 
                    <div className='bg-kala absolute top-16 p-5 w-[260px]'>
                        <ul className=''>
                            <li className='text-gray-500 hover:text-white pl-4 pr-10'>Category1</li>
                            <li className='text-gray-500 hover:text-white pl-4 pr-10'>Category2</li>
                            <li className='text-gray-500 hover:text-white pl-4 pr-10'>Category3</li>
                            <li className='text-gray-500 hover:text-white pl-4 pr-10'>Category4</li>
                        </ul> 
                        </div>}
                    <Text text={"Shop by Category"} as={"p"} className={"text-kala text-[14px]"}/>
                </Flex>
            </div>
            <div className='relative'>
                <input placeholder='Search Products' className='outline-none py-3 pl-3 w-[600px]'/>
                <FaSearch className='text-kala absolute top-1/2 right-3 -translate-y-1/2'/>
            </div>
            <div>
                <Flex className={"text-kala gap-x-7"}>
                    <Flex>
                    <FaUser />
                    <FaCaretDown />
                    </Flex>
                    <FaShoppingCart />
                </Flex>
            </div>
          </Flex>
        </Container>
    </div>
  )
}

export default AfterNav