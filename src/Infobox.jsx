import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./Infobox.css";

// Direct video URLs for each weather type (local files in public/videos/)
const HOT_VIDEO = "/videos/rainy.mp4";
const COLD_VIDEO = "/videos/rainy.mp4";
const RAINY_VIDEO = "/videos/rainy.mp4";

export default function Infobox({info}){
    let HOT_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMHFERmBsiMPilr7L5pnPLUuSbv-uhnWtXw&s";
    let COLD_URL="https://c4.wallpaperflare.com/wallpaper/607/748/969/nature-ice-crystal-cold-wallpaper-preview.jpg";
    let RANY_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q1mMLjgijhxITUKVdkkr5OEjs5U5JcOY9Q&s";

    // Improved logic using description
    const desc = info.description ? info.description.toLowerCase() : "";
    let weatherType = "hot";
    if (desc.includes("rain") || desc.includes("storm") || desc.includes("drizzle")) {
        weatherType = "rainy";
    } else if (desc.includes("snow") || desc.includes("ice") || desc.includes("cold") || desc.includes("freez")) {
        weatherType = "cold";
    } else if (desc.includes("clear") || desc.includes("sun") || desc.includes("hot") || info.tem > 25) {
        weatherType = "hot";
    } else if (info.tem < 10) {
        weatherType = "cold";
    }

    let videoSrc =
        weatherType === "rainy" ? RAINY_VIDEO :
        weatherType === "cold" ? COLD_VIDEO :
        HOT_VIDEO;

    let imageSrc =
        weatherType === "rainy" ? RANY_URL :
        weatherType === "cold" ? COLD_URL :
        HOT_URL;

    return(
        <div className="Infobox" style={{ position: "relative", overflow: "hidden" }}>
            {/* Full background video, no icons, no controls */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    zIndex: -1,
                }}
                src={videoSrc}
            />
            <div className="card-content" style={{ position: "relative", zIndex: 1 }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageSrc}
                        title="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            {weatherType === "rainy" ? <ThunderstormIcon/> : weatherType === "cold" ? <AcUnitIcon/> : <WbSunnyIcon/>}
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