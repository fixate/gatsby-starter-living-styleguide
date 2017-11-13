import React, {Component} from 'react';

const withStyledPaddingHOC = WrappedComponent => {
  class WithStyledPadding extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {pseudoClass, style, ...passThroughProps} = this.props;
      const newStyle = Object.assign({}, style, {
        backgroundColor: '#c4dcb7',
      });

      return (
        <WrappedComponent
          style={newStyle}
          {...passThroughProps}
          ref={c => (this.elemRef = c)}
        />
      );
    }
  }

  WithStyledPadding.displayName = `WithStyledPadding(${WrappedComponent.displayName})`;

  return WithStyledPadding;
};

export default withStyledPaddingHOC;
