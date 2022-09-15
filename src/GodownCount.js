import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { buyMobile, sellMobile, buyLaptop, sellLaptop } from './redux/actions'

function GodownCount(props) {
  console.log(props)
  return (
    <>
      {/* <header> GODOWN COMPONENT</header> */}
      <section className="godown">
        <p style={{ textAlign: 'center' }}>
          Laptop Counter:{props.laptopCount}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '25vw',
          }}
        >
          <button onClick={props.buyLaptop}> PURCHASE </button>
          <button onClick={props.sellLaptop}> DELIVERY </button>
        </div>
      </section>
      <section className="godown">
        <p style={{ textAlign: 'center' }}>
          Mobile Counter:{props.mobileCount}
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '25vw',
          }}
        >
          <button onClick={props.buyMobile}> PURCHASE </button>
          <button onClick={props.sellMobile}> DELIVERY </button>
        </div>
      </section>
      <br></br>
      <br></br>
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
