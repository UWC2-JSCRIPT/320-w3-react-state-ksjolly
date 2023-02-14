import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/*
        * Title
        * Image
        * Location
        * Payment information
        * */

export default function Rental({ title, image, location, payment_info }) {
    return (
    <Card sx={{maxWidth:345}}>
        <CardMedia
                sx={{height: 140}}
                image={image}  
                alt="Rental"             
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {payment_info}
                </Typography>
            </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
    </CardActions> 
    </Card>  
    );
}

Rental.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired

}