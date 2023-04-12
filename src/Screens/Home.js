import React from 'react'
import data from '../data'
import Pizza from '../Components/Pizza'
function Home() {
  return (
    <div>
       <div>
          {data.map(pizza=>{
            return <div className='col-md-4 p-3'>
                <div>
                    <Pizza pizza={pizza} />

                </div>
            </div>
          })}

       </div>
    </div>
  )
}

export default Home
