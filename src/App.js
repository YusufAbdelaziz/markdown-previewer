import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';
import Editor from './Components/Editor';
import Previwer from './Components/Previewer';
import PlainTextContext from './PlainTextContext';

const defaultPlainText =
  "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff: \nHeres some code, `<div></div>`, between 2 backticks.\n```\n\n// this is multi-line code: \n\nfunction anotherExample(firstLine, lastLine) {  \nif (firstLine == '```' && lastLine == '```') {  \nreturn multiLineCode; \n}\n}\n```\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it. \n- And of course there are lists. \n- Some are bulleted.  \n- With different indentation levels.  \n- That look like this. \n1. And there are numbererd lists to \n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n![React Logo w/ Text](https://goo.gl/Umyytc)";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: defaultPlainText,
      setText: this.setText,
    };
  }

  setText = (text) => {
    this.setState({ text });
  };
  render() {
    return (
      <div className="App">
        <h1 className="text-center pb-3">Markdown Previewer</h1>
        <PlainTextContext.Provider value={this.state}>
          <Container>
            <Row>
              <Col md={6} className="mb-md-0 mb-4">
                <Editor />
              </Col>
              <Col md={6}>
                <Previwer />
              </Col>
            </Row>
          </Container>
        </PlainTextContext.Provider>
      </div>
    );
  }
}

export { App };
