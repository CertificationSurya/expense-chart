
const data = [
{
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

import Balance from "./components/Balance"
import Chart from "./components/Chart"

function App() {

  return (
    <>
      <Balance balance={921.48}/>
      <Chart data={data}/>
    </>
  )
}

export default App
