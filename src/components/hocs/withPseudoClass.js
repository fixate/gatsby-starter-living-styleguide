import React, {Component} from 'react';

const parseCssText = cssText =>
  cssText.split(';').reduce((acc, propVal) => {
    const prop = (propVal.match(/([\w-]+)[^:]/) || [])[0];
    const val = (propVal.match(/(?:\s)(.+)/) || [])[0];

    return Object.assign({}, acc, {[prop]: val});
  }, {});

const getCssProps = reg => {
  const styleSheets = [].slice.call(document.styleSheets);

  const props = styleSheets.map(stsh => {
    const cssRules = stsh.cssRules ? [].slice.call(stsh.cssRules) : [];

    return cssRules
      .map(rules => {
        const hasSelector = reg.test(rules.selectorText);

        return hasSelector ? rules.style.cssText : [];
      })
      .reduce((acc, rule) => acc.concat(rule), []);
  });

  return parseCssText(props.join(' '));
};

const withPseudoClassHOC = WrappedComponent =>
  class WithPseudoClass extends Component {
    constructor(props) {
      super(props);
      this.state = {style: {}};
    }

    componentDidMount() {
      const w = WrappedComponent();
      const {className, pseudoClass} = this.props;

      if (!pseudoClass) return;

      const pseudoClassNames = className
        ? className
            .split(' ')
            .filter(cn => !!cn)
            .map(cn => [cn, pseudoClass].join(':'))
        : '';
      const style = pseudoClassNames
        .map(pcn => new RegExp(pcn))
        .map(getCssProps)
        .reduce((acc, props) => Object.assign({}, acc, props), {});

      this.setState({style});
    }

    render() {
      const {style} = this.state;
      const {pseudoClass, ...passThroughProps} = this.props;

      return (
        <WrappedComponent
          style={style}
          {...passThroughProps}
          ref={c => (this.elemRef = c)}
        />
      );
    }
  };

export default withPseudoClassHOC;
