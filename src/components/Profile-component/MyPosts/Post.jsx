import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Post extends Component {
    render(){
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../../../images/post2(1).jpg" />
            <Card.Body>
                <Card.Title>Post</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Like</Button>
            </Card.Body>
            </Card>
        );
    }
}; 

export default Post;

