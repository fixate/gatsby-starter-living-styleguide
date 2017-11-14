import React, {Component} from 'react';

import {getDisplayName} from '../../utils';

const withStyledPaddingHOC = WrappedComponent => {
  class WithStyledPadding extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const {style, ...passThroughProps} = this.props;
      const newStyle = Object.assign({}, style, {
        backgroundColor: '#c4dcb7',
      });

      return (
        <WrappedComponent
          style={newStyle}
          className={this.props.className}
          {...passThroughProps}
          ref={c => (this.elemRef = c)}
        />
      );
    }
  }

  WithStyledPadding.displayName = `WithStyledPadding(${getDisplayName(
    WrappedComponent
  )})`;

  return WithStyledPadding;
};

export default withStyledPaddingHOC;
