import PropTypes from 'prop-types'
const MonthlyBalance = ({ monthlyBalance =0, monthlyChange=0}) => {
    return (
        <>
            <div className="monthly-amount | mb">
                <p className='total-in-month | fs color-lgt'>Total this month</p>
                <span className=' | fs-3 fw-bold'>${monthlyBalance}</span>
            </div>

            <div className="change | mb">
                <p className='change-rate | fs fw-bold'>{monthlyChange >=0? `+${monthlyChange}` : `-${monthlyChange}`}%</p>
                <p className="from-last-month | color-lgt">from last month</p>
            </div>
        </>
    )
}

MonthlyBalance.propTypes={
    monthlyBalance: PropTypes.number.isRequired,
    monthlyChange: PropTypes.number.isRequired
}

export default MonthlyBalance
