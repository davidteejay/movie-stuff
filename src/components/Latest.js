import React from 'react'
import useFetch from '../hooks/useFetch'

const Latest = () => {
  const { loading, response, error } = useFetch('/latest')

  console.log('latest', { loading, response, error })
  return (
    <div>
      <h3>Latest Movies</h3>
      {loading
        ? <span>Loading...</span>
        : error
          ? <span>{error?.message}</span>
          : <div></div>}
    </div>
  )
}

export default Latest
