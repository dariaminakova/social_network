import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Post extends Component {
    
    render(){
        const {text, likesCount} = this.props;

        return (
            <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                  {text}
              </Card.Text>
              <Button variant="primary">Like {likesCount}</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Data Post</Card.Footer>
          </Card>
        );
    }
}; 

export default Post;

