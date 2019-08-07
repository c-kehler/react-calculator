import React from "react";
import "./App.css";
import Results from "./Components/results.js";
import Button from "./Components/buttonPad";
import * as math from "mathjs";

let tempString = "";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    // this.setState({ input: e.target.value })
    // this.setState(prevState => ({
    //   expressionArray: [...prevState.input, this.state.input]

    tempString += e.target.value;
    this.setState({ input: tempString });
    console.log(tempString);
  };

  handleEquals = e => {
    let answer = math.evaluate(tempString);
    this.setState(prevState => ({
      input: math.round(answer, 5)
    }));
  };

  handleClear = e => {
    this.setState({ input: 0 });
    tempString = "";
  };

  render() {
    return (
      <div class="calculator">
        <Results display={this.state.input} />
        <Button
          handleChange={this.handleChange}
          handleEquals={this.handleEquals}
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

export default App;