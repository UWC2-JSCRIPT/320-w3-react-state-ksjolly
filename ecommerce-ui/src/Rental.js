import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



class Rental extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cartStatus: "",
            buttonTtl: "Add to Cart"
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState(){
        this.setState((prevState) => {
            if(prevState.buttonTtl === "Add to Cart"){
                return {buttonTtl: "Remove From Cart", cartStatus: "Added to Cart!"}
            }
            else {
                return {buttonTtl: "Add to Cart", cartStatus: ""}
            }
        })
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
                    <Typography variant="body2" color="text.secondary">
                        {this.state.cartStatus}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ShoppingCartIcon/>
                    <Button size="small" onClick={this.updateState}>{this.state.buttonTtl}</Button>

                </CardActions>
            </Card>
        );
    }
}

export default Rental;
Rental.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    payment_info: PropTypes.string.isRequired,

}