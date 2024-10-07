import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./Infobox.css";
export default function Infobox({info}){
    let init_url="https://upload.wikimedia.org/wikipedia/commons/2/26/Sunny_day_in_India.jpg";
    let HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMHFERmBsiMPilr7L5pnPLUuSbv-uhnWtXw&s";
    let COLD_URL="https://c4.wallpaperflare.com/wallpaper/607/748/969/nature-ice-crystal-cold-wallpaper-preview.jpg";
    let RANY_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q1mMLjgijhxITUKVdkkr5OEjs5U5JcOY9Q&s";
  
    return(
        <div className="Infobox"> 
            <br /> <br />

        <div className="card-content">
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={(info.humidity > 80 && info.temp < 25) ? RANY_URL : info.tem>15? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
           {(info.humidity > 80 && info.temp < 25) ? <ThunderstormIcon/> : info.tem>15? <WbSunnyIcon/>: <AcUnitIcon/>} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature={info.tem}&deg;C</p>
          <p>Humidity={info.humidity}&deg;C </p>
          <p>Min Temp={info.temMin}&deg;C</p>
          <p>Max Temp={info.temMax}&deg;C</p>
          <p>The weather can be described as <i>{info.description}</i> and feels like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}