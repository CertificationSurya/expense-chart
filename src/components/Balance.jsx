import Logo from "../assets/images/Logo"
import PropTypes from 'prop-types'

const Balance = ({balance = 0}) => {
    return (
        <section className="container_balance | fill-red cream p-2 br-1">
            <div className="balance">
                <p className=" | fw-lgt " style={{fontSize: '15px'}}>My balance</p>
                <p className=" | fs-1 fw-bold">${balance}</p>
            </div>

            <div className="ring">
                <Logo />
            </div>
        </section>
    )
}

Balance.propTypes = {
    balance: PropTypes.number.isRequired
}

export default Balance
