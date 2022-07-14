
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'

const Mininavigation = (props)=>{
    console.log("@",props)
    const UL_style = {
        width:"800px",
        hight:"30px",
        lineHeight:"30px",
        display:"flex",
        justifyContent:"space-around",    
        listStyleType:"none"  ,
        margin:'auto'  
    }
    const A_style ={
        display:"block",
        width:"120px",
        height:"30px",
        lineHeight:"30px",
        color:"white",

    }
    

    return(
        <ul style={UL_style} >
            {props.items.map(item=><li key={item.id}><Link style={A_style} to={item.router}>{item.title}</Link></li>)}
        </ul>
    )

}

export default Mininavigation