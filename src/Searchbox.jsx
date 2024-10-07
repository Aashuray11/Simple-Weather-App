import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Searchbox({updateInfo}){

    let [city,setcity]=useState("")
    let [error,seterror]=useState(false);

    const API_url="https://api.openweathermap.org/data/2.5/weather";
        const API_KEY="12a6b876ac739a2222fcff2f928a71dd"

        let getWeatherInfo=async()=>{
            try{
                let Response= await fetch(`${API_url}?q=${city}&appid=${API_KEY}&units=metric`)
                let Responsejson=await Response.json();
                let result={
                  city:city,
                  tem:Responsejson.main.temp,
                  temMin:Responsejson.main.temp_min,
                  temMax:Responsejson.main.temp_max,
                  humidity:Responsejson.main.humidity,
                  feelsLike:Responsejson.main.feels_like,
                  description:Responsejson.weather[0].description
                }  
                console.log(result)
                return result;
            } catch(error){
                console.error("An error occurred:", err);
             throw error;
              
            }    
        }

    function handleChange(event){
        setcity(event.target.value)
    }

    let handleSubmit =async(event)=>{
       try{
        event.preventDefault();
        console.log(city);
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo)
       }
       catch(err){
        seterror(true)
       }

    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined"  value={city} onChange={handleChange} required/>
            <br /> <br />
            <Button variant="contained" type="submit"> Search</Button>
            

            </form>
            {error && <p style={{color:"red"}}>No Such place found </p> }
        </div>
    )
}