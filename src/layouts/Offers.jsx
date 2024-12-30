import React from 'react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Text from '../components/Text'
import Product from '../components/Product'
import prod from '../assets/product.png'

const Offers = () => {
  return (
    
    <div>
        <Container>
          <Text text={"Special Offers"} as={"h2"} className={"text-[35px] text-kala font-bold pb-[50px]"}/>

            <Flex className={"gap-x-5 mb-28"}>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
            </Flex>
        </Container>
    </div>



 
  )
}

export default Offers