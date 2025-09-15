import React from 'react'
import Container from '../Layout/Container.jsx'
import user from '../../../../assets/user.png'
import home from '../../../../assets/home.svg'
import setings from '../../../../assets/setings.svg'
import subscription from '../../../../assets/subscription.svg'

const Header = () => {
    return (
        <div className='bg-[#F0F0F0] shadow-lg'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div className='py-5'>
                        <img
                            src="https://deepthought.education/assets/images/logo/logo.svg"
                            alt="DeepThought Logo"
                            className="h-[49px]"
                        />
                    </div>
                    <div className='flex items-center gap-x-[22px]'>
                        <img src={home} alt="" />
                        <img src={setings} alt="" />
                        <img src={subscription} alt="" />
                        <div>
                            <img src={user} alt="User Avatar" className="h-10 w-10 rounded-full" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header