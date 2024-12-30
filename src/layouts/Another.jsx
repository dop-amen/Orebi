import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import adLast from '../assets/adBottom.png'

const Another = () => {
  return (
    <div>
        <Container className={"py-[150px]"}>
            <Image source={adLast} />
        </Container>
    </div>
  )
}

export default Another