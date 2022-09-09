const initialState = {
  NumberOfMobiles: 1000,
  NumberOfLaptops: 100,
}
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELL_MOBILE':
      return {
        ...state,
        NumberOfMobiles: state.NumberOfMobiles - 1,
      }

    case 'BUY_MOBILE':
      return {
        ...state,
        NumberOfMobiles: state.NumberOfMobiles + 1,
      }

    case 'SELL_LAPTOP':
      return {
        ...state,
        NumberOfLaptops: state.NumberOfLaptops - 1,
      }
    case 'BUY_LAPTOP':
      return {
        ...state,
        NumberOfLaptops: state.NumberOfLaptops + 1,
      }
    default:
      return state
  }
}

export default Reducer
