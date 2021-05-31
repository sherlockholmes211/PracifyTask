import React from 'react'
import './ClientsLogo.css'
import item1 from '../../Assets/imgs/Group 39.png'
import item2 from '../../Assets/imgs/Group 64.png'
import item3 from '../../Assets/imgs/Group 55.png'


const ClientsLogo = () => {
    return (
        <div className="items-control">
            <img alt="no text" src={item1}></img>
            <img alt="no text" src={item2}></img>
            <img alt="no text" src={item3}></img>
            <img alt="no text" src={item2}></img>
            <img alt="no text" src={item1}></img>

        </div>
    )
}

export default ClientsLogo
