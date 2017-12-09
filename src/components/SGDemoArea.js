import React, {Component} from 'react';
import reactToJsxString from 'react-element-to-jsx-string';

const jsxToString = (component, customOpts = {}) => {
  const options = Object.assign(
    {},
    {
      filterProps: ['__source', 'ref'],
      showDefaultProps: false,
    },
    customOpts
  );

  return reactToJsxString(component, options);
};

class SGDemoArea extends Component {
  constructor(props) {
    super(props);

    this.state = {demoVisible: false};
    this.toggleDemo = this.toggleDemo.bind(this);
  }

  toggleDemo() {
    this.setState({demoVisible: !this.state.demoVisible});
  }

  render() {
    const {demoVisible} = this.state;
    const {title, comp, hideComp, options} = this.props;
    const codeToggler = (
      <code onClick={this.toggleDemo} style={{cursor: 'pointer', opacity: 0.5}}>
        &lt;/&gt;
      </code>
    );

    return (
      <div>
        {title ? <h3>{title}</h3> : null}

        {!hideComp ? comp : null}

        <p>
          <small>{codeToggler}</small>
        </p>

        {demoVisible ? (
          <div style={{opacity: 0.5}}>
            <pre>{jsxToString(comp, options)}</pre>
          </div>
        ) : null}

        <hr />
      </div>
    );
  }
}

SGDemoArea.displayName = 'SGDemoArea';
SGDemoArea.defaultProps = {
  hideComp: false,
};

export default SGDemoArea;
