import React, { Component } from 'react';
import { Form, Card } from 'react-bootstrap';
import './index.css';
import PlainTextContext from '../../PlainTextContext';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card className="shadow">
        <Card.Body>
          <Form>
            <Form.Group controlId="editor">
              <Form.Label className="form-label text-center card-title">
                Editor
              </Form.Label>
              <div className="dropdown-divider mb-4"></div>
              <PlainTextContext.Consumer>
                {({ text, setText }) => {
                  console.log(text);
                  return (
                    <Form.Control
                      as="textarea"
                      id="editor"
                      value={text}
                      rows={12}
                      onChange={(e) => setText(e.target.value)}
                    />
                  );
                }}
              </PlainTextContext.Consumer>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default Editor;
