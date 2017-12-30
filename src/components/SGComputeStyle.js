import React, {Component} from 'react';

const getComputedStyle = (elem, style) =>
  style ? window.getComputedStyle(elem)[style] : undefined;

class ComputeStyle extends Component {
  state = {elem: null};

  handleRefCallback = elem => {
    this.setState({elem});
  };

  render() {
    const {elem} = this.state;
    const {styleToCompute, render} = this.props;
    const computedStyle = elem
      ? getComputedStyle(elem, styleToCompute)
      : undefined;

    return render({computedStyle, refCallback: this.handleRefCallback});
  }
}

export default ComputeStyle;
