import React from 'react'
import Flex from '../components/Flex'
import Menu from '../components/Menu'
import Container from '../components/Container'
import Text from '../components/Text'
import Image from '../components/Image'
import foot from '../assets/logoBot.png'


const Footer = () => {
  return (
    <div className='bg-[#F5F5F3] py-16'>
        <Container>
            <Flex>
                <div className='w-[14%]'>
                    <Text text={"MENU"} as={"p"} className={"text-[16px] py-4 font-bold text-kala"}/>
                    <Menu className={"flex flex-col text-[14px] text-ash gap-y-2"}>
                        <li className=''>Home</li>
                        <li className=''>Shop</li>
                        <li className=''>About</li>
                        <li className=''>Contact</li>
                        <li className=''>Journal</li>
                    </Menu>
                </div>
                <div className='w-[14%]'>
                    <Text text={"SHOP"} as={"p"} className={"text-[16px] py-4 font-bold text-kala"}/>
                    <Menu className={"flex flex-col text-[14px] text-ash gap-y-2"}>
                        <li className=''>Category1</li>
                        <li className=''>Category2</li>
                        <li className=''>Category3</li>
                        <li className=''>Category4</li>
                        <li className=''>Category5</li>
                    </Menu>
                </div>
                <div className='w-[20%]'>
                    <Text text={"HELP"} as={"p"} className={"text-[16px] py-4 font-bold text-kala"}/>
                    <Menu className={"flex flex-col text-[14px] text-ash gap-y-2"}>
                        <li className=''>Privacy Policy</li>
                        <li className=''>Terms & Conditions</li>
                        <li className=''>Special E-shop</li>
                        <li className=''>Shipping</li>
                        <li className=''>Secure Payments</li>
                    </Menu>
                </div>
                <div className='w-[30%]'>
                    <Text text={"(052) 611-5711"} as={"p"} className={"text-[16px] pt-4 font-bold text-kala"}/>
                    <Text text={"company@domain.com"} as={"p"} className={"text-[16px] py-2 font-bold text-kala"}/>
                    <Text text={"575 Crescent Ave. Quakertown, PA 18951"} as={"p"} className={"text-[14px] py-4 text-ash"}/>
                </div>
                <div>
                    <Image source={foot}/>
                </div>
        </Flex>
        </Container>
        
    </div>
  )
}

export default Footer