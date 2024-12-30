import React from 'react'
import Product from '../components/Product'
import Flex from '../components/Flex'
import Container from '../components/Container'
import prod from '../assets/product.png'
import Text from '../components/Text'

const Products = () => {
  return (
    <div>
        <Container>
          <Text text={"New Arrivals"} as={"h2"} className={"text-[35px] text-kala font-bold pb-[50px]"}/>
            <Flex className={"gap-x-5 mb-28"}>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
            </Flex>
            <Flex className={"gap-x-5 mt-2"}>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
                <Product prod={prod} proName={"Basic Crew Neck Tee"} price={"$44.00"} badge={"New"}/>
            </Flex>
        </Container>
        
    </div>
  )
}

export default Products