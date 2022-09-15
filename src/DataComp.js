import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './redux/actions'
// import { fetchData, fetchFailure, fetchSuccess } from './redux/actions'

function DataComp() {
  const isLoading = useSelector((state) => state.DataInBulk.isLoading)
  const usersData = useSelector((state) => state.DataInBulk.success)
  console.log('shiva')
  console.log(usersData)

  const dispatch = useDispatch()

  const fetchAPI = () => {
    dispatch(fetchUsers())
  }
  // const fetchUsers = () => {
  //   return function (dispatch) {
  //     dispatch(fetchData())
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then((response) => {
  //         let users = response.data
  //         dispatch(fetchSuccess(users))
  //       })
  //       .catch((error) => {
  //         dispatch(fetchFailure(error))
  //       })
  //   }
  // }
  return (
    <>
      <h2>Data Component</h2>
      <section className="godown">
        {usersData && (
          <p style={{ textAlign: 'center' }}>
            Number of users:{usersData.length}
            {/* {usersData.map((user) => {
              return user.username
            })} */}
          </p>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '25vw',
          }}
        >
          <button onClick={fetchAPI}> Get Data </button>
        </div>
      </section>
    </>
  )
}

export default DataComp
