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
    const {children, styleToCompute, style, tag, ...restProps} = this.props;
    const elemStyle = style ? style : {textAlign: 'center'};
    const computedToAppend = ` - ${computedStyle}`;
    const child = Array.isArray(children)
      ? children.concat(computedToAppend)
      : React.cloneElement(children, {}, [
          children.props.children.concat(computedToAppend),
        ]);
    const Tag = tag ? tag : 'div';

    return (
      <Tag style={elemStyle} {...restProps} ref={c => (this.elemRef = c)}>
        {child}
      </Tag>
    );
  }
}

WithComputedStyle.displayName = 'WithComputedStyle';

export default WithComputedStyle;
