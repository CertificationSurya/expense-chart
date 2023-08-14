import PropTypes from 'prop-types'

import MonthlyBalance from './MonthlyBalance'
import ChartItem from './ChartItem'

const Chart = ({ data = [] }) => {
    const amount = [];
    data.map(eachData=> {
        amount.push(eachData.amount)
    })
    const maxValue = Math.max(...amount)
    
    return (
        <section className="container_chart | p-2 br-1 mb-1">
            <div className="spendingChart">
                <h1>Spending - Last 7 days</h1>

                <div className="line-bar">
                    {data &&
                        data.map((eachData, i) => (
                            <ChartItem key={i} day={eachData.day} amount={eachData.amount} maxValue={maxValue}/>
                        ))
                    }
                </div>

            </div>

            <div className="monthly-evaluation">
                <MonthlyBalance monthlyBalance={478.33} monthlyChange={2.4} />
            </div>
        </section>
    )


}

Chart.propTypes = {
    data: PropTypes.array.isRequired
}
export default Chart
