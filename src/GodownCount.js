import React from 'react'
import { connect, useSelector } from 'react-redux'
import { buyMobile, sellMobile, buyLaptop, sellLaptop } from './redux/actions'

function GodownCount(props) {
  console.log(props)
  return (
    <>
      <header> GODOWN COMPONENT</header>
      <section>
        <h2>Laptop Counter:{props.laptopCount}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '25vw',
          }}
        >
          <button onClick={props.buyLaptop}> PURCHASE </button>
          <button onClick={props.sellLaptop}> SELL </button>
        </div>
      </section>
      <section>
        <h2>Mobile Counter:{props.mobileCount}</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '25vw',
          }}
        >
          <button onClick={props.buyMobile}> PURCHASE </button>
          <button onClick={props.sellMobile}> SELL </button>
        </div>
      </section>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    mobileCount: state.NumberOfMobiles,
    laptopCount: state.NumberOfLaptops,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyMobile: () => dispatch(buyMobile()),
    sellMobile: () => dispatch(sellMobile()),
    buyLaptop: () => dispatch(buyLaptop()),
    sellLaptop: () => dispatch(sellLaptop()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GodownCount)
