import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'


const ChartItem = ({ day = 'none-day', amount = 0, maxValue = 0 }) => {
    const [isHovered, setIsHovered] = useState(false)

    const changeHoverState = () =>{
        setIsHovered(prevIsHovered => !prevIsHovered);
    }


    // differentiating smaller/larger window
    const [currentWindow, setCurrentWindow] = useState(window.innerWidth)
    useEffect(()=>{
        const handleResize = () => {
            setCurrentWindow(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
    }},[])

    return (
        <div className="each-bar | center">
            {/* till tablet site display amount without hover */}
            {currentWindow < 768 && <p className='| browney cream br-0 fs-0'>${amount}</p>}

            {isHovered && <p className='| browney cream br-0 fs-0'>${amount}</p>}
            <div className={`draw | br-0 ${amount === maxValue? "fill-blue" : "fill-red"}`} style={{ height: `${amount * 3.5}px`, opacity: `${isHovered? "0.75" : '1'}` }} onMouseOver={changeHoverState} onMouseLeave={changeHoverState}> </div>
            <p className=' | color-lgt'>{day}</p>
        </div>
    )
}

ChartItem.propTypes = {
    day: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    maxValue: PropTypes.number
}

export default ChartItem
