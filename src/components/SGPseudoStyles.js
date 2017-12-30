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

const getPseudoStyles = ({className, pseudoClass}) => {
  if (!pseudoClass || !className) return;

  const pseudoClassNames = className
    ? className
        .split(' ')
        .filter(cn => !!cn)
        .map(cn => [cn, pseudoClass].join(':'))
    : [];

  return pseudoClassNames
    .map(pcn => new RegExp(`(^| )\.${pcn}`))
    .map(getCssProps)
    .reduce((acc, props) => Object.assign({}, acc, props), {});
};

const PseudoStyles = ({className, pseudoClass, render}) => {
  const style = getPseudoStyles({className, pseudoClass});

  return render({style});
};

export default PseudoStyles;
