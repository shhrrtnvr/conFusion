import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{
    renderDish(dish)
    {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    GetFormattedDate(date) {
        const M = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = new Date(date);
        var month = d.getMonth() + 1;
        var day = d.getDate();
        var year = d.getFullYear();
        return M[month] + " " + day + " , " + year;
    }

    renderComments(comments)
    {
        if (comments == null) return (<div></div>);
        const formattedComments = comments.map((comment) => {
            return(
            <div>
                <ul className="list-unstyled">
                <li><p>{comment.comment}</p>
                <p>-- {comment.author}  ,  {this.GetFormattedDate(comment.date)}</p></li>
                </ul>
            </div>
            );
        });
        
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {formattedComments}
                </ul>
            </div>
        )

    }

    render()
    {
        const dish = this.props.dish;
        if (dish == null) return (<div></div>);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
    }
}


export default DishDetail;