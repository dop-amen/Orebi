import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { Fa2,FaArrowRotateLeft } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import Text from '../components/Text';

const Features = () => {
  return (
    <div className='border-b-gray-500'>
        <Container>
            <Flex className={"text-kala justify-between items-center py-3"}>
                <div className='flex items-center gap-x-2'>
                    <Fa2 />
                    <Text text={"Two years warranty"} as={"h4"} className={"text-[15px]"}/>
                </div>
                <div className='flex items-center gap-x-2'>
                    <FaTruck />
                    <Text text={"Free shipping"} as={"h4"} className={"text-[15px]"}/>
                </div>
                <div className='flex items-center gap-x-2'>
                    <FaArrowRotateLeft />
                    <Text text={"Return policy in 30 days"} as={"h4"} className={"text-[15px]"}/>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Features