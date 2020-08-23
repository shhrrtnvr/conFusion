import React, { useState } from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap';

function ifSelected(dish, selectedDish){
    if (dish === selectedDish)
        return (
            <Card>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else return (<div></div>)
}

function Menu(props){
    const [selectedDish, setSelectedDish] = useState(null);
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-4">
                <Card id={dish.id} onClick= {() => setSelectedDish(dish)}>
                    <CardImg src={dish.image} alt={dish.name} width="100%" />
                </Card>
                {ifSelected(dish, selectedDish)}
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;