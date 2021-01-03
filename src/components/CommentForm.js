import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Label, Col, FormGroup } from 'reactstrap';
import { Control, Errors, LocalForm } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const CommentForm = ({dishID, addComment}) => {
    const [modalState, setmodalState] = useState(false);
    const toggleModal = () => {
        setmodalState(!modalState);
    }
    const handleSubmit = (values) => {
        addComment(dishID, values.author, values.rating, values.comment)
    }
    return (
        <div>
            <Button outline onClick = {() => setmodalState(!modalState)}><span className="fa fa-pen"></span>Submit Comment</Button>
            <Modal isOpen={modalState} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => handleSubmit(values)}>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="rating" md={2}>Rating</Label>
                            </Row>
                            <Row>
                                <Col>
                                    <Control.select model=".rating" id="rating" name="rating"
                                    placeholder="First Name" className="form-control" >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="author" md={4} >Your Name</Label>
                            </Row>
                            <Row>
                                <Col>
                                    <Control.text model=".author" id="author" name="author"
                                    placeholder="Name" className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Label htmlFor="comment" md={2}>Comment</Label>
                            </Row>
                            <Row>
                                <Col>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                    rows={6} className="form-control" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary" >Submit</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default CommentForm;