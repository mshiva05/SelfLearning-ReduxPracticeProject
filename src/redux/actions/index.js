export const buyMobile = () => {
  return { type: 'BUY_MOBILE' }
}

export const sellMobile = () => {
  return { type: 'SELL_MOBILE' }
}

export const buyLaptop = () => {
  return { type: 'BUY_LAPTOP' }
}

export const sellLaptop = () => {
  return { type: 'SELL_LAPTOP' }
}

export const fetchData = () => {
  return { type: 'FETCH_REQUEST' }
}
export const fetchSuccess = (users) => {
  return { type: 'FETCH_SUCCESS', payload: users }
}

export const fetchFailure = (error) => {
  return { type: 'FETCH_FAILURE', payload: error }
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchData())
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => {
        console.log('sisko')
        console.log(users)
        dispatch(fetchSuccess(users))
      })

      .catch((error) => {
        dispatch(fetchFailure(error))
      })
  }
}
