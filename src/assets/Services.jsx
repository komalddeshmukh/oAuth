import React from 'react'
import { useGlobalContext } from '../Context'

const Services = () => {
    const {services} = useGlobalContext();
    console.log(services)
    return (
        <div >
           Services
        </div>
    )
}

export default Services