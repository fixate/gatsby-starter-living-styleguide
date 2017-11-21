import React, {Component} from 'react';

class WithStyledMargin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {children, style, ...restProps} = this.props;

    return (
      <div
        style={Object.assign({}, style, {
          backgroundColor: '#f7cb9d',
          textAlign: 'center',
        })}
        {...restProps}>
        {children}
      </div>
    );
  }
}

WithStyledMargin.displayName = 'WithStyledMargin';

export default WithStyledMargin;
