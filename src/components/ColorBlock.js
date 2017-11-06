import React, {Component} from 'react';

const rgbToHex = rgbString =>
  rgbString
    .match(/\d+/g)
    .map(n => Number(n).toString(16))
    .slice(0, 3)
    .map(v => (v.length < 2 ? `0${v}` : v))
    .join('');

class ColorBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const rgbString = window.getComputedStyle(this.colorRef).backgroundColor;
    const hexColor = rgbToHex(rgbString);

    this.setState({
      hexColor,
    });
  }

  render() {
    const {hexColor} = this.state;
    const {className, children} = this.props;

    return (
      <div className={className} ref={c => (this.colorRef = c)}>
        {children}
        {hexColor ? ` - #${hexColor}` : ''}
      </div>
    );
  }
}

export default ColorBlock;
