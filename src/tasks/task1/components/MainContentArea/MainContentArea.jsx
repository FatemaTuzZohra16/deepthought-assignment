import React from 'react'
import JourneyBoard from '../JourneyBoard/JourneyBoard'
import ContentArea from '../ContentArea/ContentArea'
import RightPanel from '../RightPanel/RightPanel'
import Container from '../Layout/Container'

const MainContentArea = () => {
    return (
        <div>
            <Container>
               <div className='flex gap-x-[55px]'>
                 <div className="flex-shrink-0 w-[132px]">
                    <JourneyBoard />
                </div>
                <div className='flex-grow'>
                    <ContentArea />
                </div>
                <div className="flex-shrink-0 w-[95px]">
                    <RightPanel />
                </div>
               </div>
            </Container>
        </div>
    )
}

export default MainContentArea