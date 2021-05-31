import React from 'react'
import leafs from '../../Assets/imgs/Group 134.png'
import flower from '../../Assets/imgs/Group 195.png'
import logoout from '../../Assets/imgs/Group 228.png'


const PositionImage = () => {
    return (
        <>
           <img alt="no text" style={{position:"absolute",  width: "419px",height: "570px",top:"30vh",left:"50vw"}} src={flower}></img> 
           <img alt="no text" style={{position:"absolute",top:"250vh",left:"-40%"}} src={leafs}></img> 
           <img alt="no text" style={{position:"absolute",top:"40vh",left:"70vw",zIndex:"-1"}} src={logoout}></img> 
           {/* <img alt="no text" src={}></img> */}
        </>
    )
}

export default PositionImage
