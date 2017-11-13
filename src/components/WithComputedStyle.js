import React, {Component} from 'react';

class WithComputedStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {computedStyle: ''};
  }

  componentDidMount() {
    const {styleToCompute} = this.props;
    const e = this.elemRef;

    if (!styleToCompute) return;

    const computedStyle = window.getComputedStyle(e)[styleToCompute];

    this.setState({computedStyle});
  }

  render() {
    const {computedStyle} = this.state;
    const {children, ...restProps} = this.props;

    return (
      <div
        style={{textAlign: 'center'}}
        {...restProps}
        ref={c => (this.elemRef = c)}>
        {children} - {computedStyle}
      </div>
    );
  }
}

WithComputedStyle.displayName = 'WithComputedStyle';

export default WithComputedStyle;
