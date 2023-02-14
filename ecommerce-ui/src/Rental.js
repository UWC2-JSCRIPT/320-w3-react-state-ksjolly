import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class Rental extends React.Component {
    onTrigger = (event) => {
        console.log(event);
        this.props.parentCallback(this.props.title);
        event.preventDefault();
    }
    render() {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={this.props.image}
                    alt="Rental"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {this.props.payment_info}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.onTrigger}>Add to Cart</Button>
                </CardActions>
            </Card>
        );
    }
}

export default Rental;
Rental.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    authorImg: PropTypes.string.isRequired

}