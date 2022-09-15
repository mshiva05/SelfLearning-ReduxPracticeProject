import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

function GodownCounter1() {
  const mobileCounter1 = useSelector((state) => state.NumberOfMobiles)
  const laptopCounter1 = useSelector((state) => state.NumberOfLaptops)
  const dispatch = useDispatch()

  const buyLaptop = () => {
    dispatch({ type: 'BUY_LAPTOP' })
  }

  const sellLaptop = () => {
    dispatch({ type: 'SELL_LAPTOP' })
  }

  const buyMobile = () => {
    dispatch({ type: 'BUY_MOBILE' })
  }

  const sellMobile = () => {
    dispatch({ type: 'SELL_MOBILE' })
  }

  return (
    <>
      {/* <header> GODOWN COMPONENT 1</header> */}
      <section className="godown">
        <p style={{ textAlign: 'center' }}>Laptop Counter:{laptopCounter1}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '25vw',
          }}
        >
          <button onClick={buyLaptop}> PURCHASE </button>
          <button onClick={sellLaptop}> DELIVERY </button>
        </div>
      </section>
      <section className="godown">
        <p style={{ textAlign: 'center' }}>Mobile Counter:{mobileCounter1}</p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '25vw',
          }}
        >
          <button onClick={buyMobile}> PURCHASE </button>
          <button onClick={sellMobile}> DELIVERY </button>
        </div>
      </section>
    </>
  )
}

export default GodownCounter1
