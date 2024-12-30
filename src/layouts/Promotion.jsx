import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import adone from '../assets/adone.png'
import adtwo from '../assets/adtwo.png'
import adthree from '../assets/adthree.png'

const Promotion = () => {
  return (
    <div className='py-32'>
        <Container>
            <Flex className={"gap-x-10"}>
                <div className='w-1/2'>
                    <Image source={adone}/>
                </div>
                <div className='w-1/2 flex flex-col gap-y-10'>
                    <div><Image source={adtwo}/></div>
                    <div><Image source={adthree}/></div>
                </div>
            </Flex>
        </Container>
    </div>
  )
}

export default Promotion