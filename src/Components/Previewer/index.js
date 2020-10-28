import React, { Component } from 'react';
import marked from 'marked';
import { Card } from 'react-bootstrap';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './index.css';
import PlainTextContext from '../../PlainTextContext';
marked.setOptions({
  tables: true,
  gfm: true,
  breaks: true,
  smartLists: true,
  pedantic: false,
  highlight: (code, lang) => {
    return hljs.highlightAuto(code).value;
  },
});

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getMarkdownText(text) {
    var rawMarkup = marked(text);
    return { __html: rawMarkup };
  }
  render() {
    return (
      <Card className="shadow .custom-card">
        <Card.Body>
          <Card.Title className="text-center mb-3">Previewer</Card.Title>
          <div className="dropdown-divider mb-2"></div>
          <PlainTextContext.Consumer>
            {({ text }) => (
              <div
                id="preview"
                dangerouslySetInnerHTML={this.getMarkdownText(text)}
              />
            )}
          </PlainTextContext.Consumer>
        </Card.Body>
      </Card>
    );
  }
}

export default Previewer;
