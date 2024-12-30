import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import logo from '../assets/Logo.png'
import Menu from './Menu'
import { Link } from 'react-router'



const Navber = () => {
  return (
    <div>
        <Container>
          <Flex className={"justify-between items-center py-6"}>
            <div>
              <Link to={"/"}>
                <Image source={logo}/>
              </Link>
            </div>
            <div>
                <Menu className={"gap-x-10 text-[15px] text-[#767676] "}>
                    <Link to={"/"}>
                    <li className='font-bold text-[#262626]'>Home</li>
                    </Link>
                    <Link to={"/pro"}>
                      <li>Shop</li>
                    </Link>
                    
                    <li>About</li>
                    <li>Contacts</li>
                    <li>Journal</li>
                </Menu>
            </div>
            <div></div>
          </Flex>
        </Container>
      </div>
  )
}



export default Navber