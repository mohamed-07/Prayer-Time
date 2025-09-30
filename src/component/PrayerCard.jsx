import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PrayerCard({name, time, isNext}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ border: isNext ? "3px solid  green" : ""}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/src/assets/Islamic Quotes.jpg"
        title="green iguana"
      />
      <CardContent>
        <h2 style={{ color: isNext ? "green" : "inherit",fontSize:"25px", fontWeight:"bold"}}>
          {name}
        </h2>
        <Typography variant="h1" sx={{ color: 'text.secondary' }}
                    style={{ color: isNext ? "green" : "inherit" }}>
            {time}
        </Typography>
      </CardContent>
    </Card>
  );
}
