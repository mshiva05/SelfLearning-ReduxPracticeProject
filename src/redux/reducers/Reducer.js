const initialState = {
  NumberOfMobiles: 1000,
  NumberOfLaptops: 100,
  DataInBulk: {
    isLoading: null,
    success: [],
    failure: '',
  },
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

    case 'FETCH_REQUEST':
      return {
        ...state,
        ...state.DataInBulk,
        DataInBulk: {
          isLoading: true,
        },
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        ...state.DataInBulk,
        DataInBulk: {
          isLoading: false,
          success: action.payload,
          failure: '',
        },
      }

    case 'FETCH_FAILURE':
      return {
        ...state,
        ...state.DataInBulk,
        DataInBulk: {
          isLoading: false,
          success: '',
          failure: action.payload,
        },
      }
    default:
      return state
  }
}

export default Reducer
