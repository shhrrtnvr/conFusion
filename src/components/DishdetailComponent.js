import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardText,
     Breadcrumb, BreadcrumbItem,} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

function renderDish(dish) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function renderComments(comments)
{
    if (comments == null) return (<div></div>);
    const formattedComments = comments.map((comment) => {
        return(
            <React.Fragment>
                <ul className="list-unstyled">
                <li><p>{comment.comment}</p>
                <p>-- {comment.author}  ,  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></li>
                </ul>
            </React.Fragment>
        );
    });
    return (
        <div className="col-12 col-md-4 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {formattedComments}
            </ul>
            <CommentForm />
        </div>
    )

}

const DishDetail = (props) => {
    
    if (props.dish == null) return (<div></div>);
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {renderDish(props.dish)}
                {renderComments(props.comments)}
            </div>
            
        </div>
    );
}


export default DishDetail;