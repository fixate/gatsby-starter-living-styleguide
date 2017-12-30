import React, {Component} from 'react';

const parseCssText = cssText =>
  cssText.split(';').reduce((acc, propVal) => {
    const [prop, val] = propVal.split(':');

    return Object.assign({}, acc, {[prop.trim()]: val});
  }, {});

const getCssProps = reg => {
  const styleSheets = [].slice.call(document.styleSheets);

  const props = styleSheets.map(stsh => {
    const cssRules = stsh.cssRules ? [].slice.call(stsh.cssRules) : [];

    return cssRules
      .filter(({selectorText}) => reg.test(selectorText))
      .map(rules => rules.style.cssText)
      .reduce((acc, rule) => acc.concat(rule), []);
  });

  return parseCssText([].concat(...props).join(''));
};

class PseudoStyles extends Component {
  state = {style: {}};

  componentDidMount() {
    const {className, pseudoClass} = this.props;

    if (!pseudoClass || !className) return;

    const pseudoClassNames = className
      ? className
          .split(' ')
          .filter(cn => !!cn)
          .map(cn => [cn, pseudoClass].join(':'))
      : [];
    const style = pseudoClassNames
      .map(pcn => new RegExp(`(^| )\.${pcn}`))
      .map(getCssProps)
      .reduce((acc, props) => Object.assign({}, acc, props), {});

    this.setState({style});
  }

  render() {
    const {style} = this.state;
    const {render} = this.props;

    return render({style});
  }
}

export default PseudoStyles;
