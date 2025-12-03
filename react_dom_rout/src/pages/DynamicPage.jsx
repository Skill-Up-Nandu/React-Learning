import React from 'react'
import {} from 'react-router-dom'
import {useParams} from 'react-router-dom'


const DynamicPage = ()=>{

    let params = useParams() 
    console.log(params)   
      return(
        <div>
            <h1 className='capital'>Details about {params.aboutId}</h1>
        </div>
      )
}
export default DynamicPage