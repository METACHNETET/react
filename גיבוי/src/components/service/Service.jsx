import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import DataStore from "../../data/dataStore";
import './Service.css';
import AddMeeting from '../meeting/AddMeeting';

const Service = ({ service }) => {
  useEffect(() => {
    console.log(service.img);
  }, [service]);

  return (
    <div className='font'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="310"
            image={service.img}
            alt={service.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>{service.name}</p>
              <p>{service.description}</p>
              <p>מחיר ליום: {service.child}</p>
            </Typography>
            <AddMeeting service={service} />
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Service;
