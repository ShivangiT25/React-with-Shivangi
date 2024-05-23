import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoCard({info}) {
  const HOT_IMG = "https://image.springbeetle.eu/cdn-cgi/image/dpr=1,format=webp/https://staticprod.sys.flexispot.co.uk/dev/trantor/attachments/c8e23bcf-31a8-4430-ad8e-6daacee02c64.png";
  const COLD_IMG = "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=612x612&w=0&k=20&c=LKgdYGIdh94AZ9Q5F9IE5TSHY1zz4oP4uauG79KIN8w=";
  const RAIN_IMG = "https://kalingatv.com/wp-content/uploads/2018/08/Rainy-Day.jpg";

//  console.log({info});
  return (
    <Card className="ml-auto mr-auto my-3"sx={{ maxWidth: 330, padding: '10px', border:"1px solid black"}}>
      <CardActionArea>
        <CardMedia
          style={{borderRadius:'4px'}}
          component="img"
          height="140"
          image={info.temp>50 ? RAIN_IMG :info.temp>=20 && info.temp<=50 ? HOT_IMG : COLD_IMG}
          alt="picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontFamily={'monospace'}>
            <b>{info.cityname}</b>&nbsp;
            {info.temp>50 ? <ThunderstormIcon/> :info.temp>=20 && info.temp<=50 ? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="black" fontFamily={'inherit'}>
            Feels Like  : <b><i>{info.feels_like}</i></b><br/>
            Temperature: <b><i>{info.temp}&deg;C</i></b><br/>
            Humidity  : <b><i>{info.humidity}%</i></b><br/>
            Pressure     : <b><i>{info.pressure}km/h</i></b><br/>  
            Weather : <b><i>{info.weather}</i></b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}