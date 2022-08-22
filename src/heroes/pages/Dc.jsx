import React from 'react'
import Comics from '../components/Comics'

export function Dc() {
  return (<>
    <h2>Dc comics</h2>
    <hr />
    <div className='container'>
      <div className='row'><Comics editorial='DC Comics' /></div>
    </div></>

  )
}

