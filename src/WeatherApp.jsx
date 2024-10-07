import Searchbox from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react"



export default function WeaterApp(){

    let [weatherinfo,Setweatherinfo]=useState({
        city:"Nawalparasi",
        tem:24.5,
        temMin:25.8,
        temMax:25.02,
        humidity:156,
        feelsLike:3.0,
        description:"haze"
    })

    let updateinfo=(newinfo)=>{
        Setweatherinfo(newinfo)
    }

    return(
        <div>
            <h2>This Weather App by Nepal_weathForCast</h2>
            <br />
            <Searchbox updateInfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
            
        </div>
    )
}