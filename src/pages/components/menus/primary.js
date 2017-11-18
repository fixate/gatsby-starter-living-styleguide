import React from 'react';

class MenuPrimary extends React.Component {
  constructor() {
    super();

    this.state = {isOpen: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const {isOpen} = this.state;

    return (
      <div className={isOpen ? 'is-open-menu' : ''}>
        <button className="menu-toggle" onClick={this.handleClick}>
          menu toggle
        </button>

        <nav className=" menu--primary-container">
          <ul className="menu--primary menu">
            <li className="menu__item menu__item--current">
              <a href="javascript:void(0);">home</a>
            </li>
            <li className="menu__item">
              <a href="javascript:void(0);">item 1</a>
              <ul className="menu menu__sub">
                <li className="menu__item">
                  <a href="javascript:void(0);">item 1 child 1</a>
                </li>
                <li className="menu__item">
                  <a href="javascript:void(0);">item 1 child 2</a>
                  <ul className="menu menu__sub">
                    <li className="menu__item">
                      <a href="javascript:void(0);">level 2 child 1</a>
                    </li>
                    <li className="menu__item">
                      <a href="javascript:void(0);">level 2 child 2</a>
                    </li>
                    <li className="menu__item">
                      <a href="javascript:void(0);">level 2 child 3</a>
                    </li>
                    <li className="menu__item">
                      <a href="javascript:void(0);">level 2 child 4</a>
                    </li>
                  </ul>
                </li>
                <li className="menu__item">
                  <a href="javascript:void(0);">item 1 child 3</a>
                </li>
                <li className="menu__item">
                  <a href="javascript:void(0);">item 1 child 4</a>
                </li>
              </ul>
            </li>
            <li className="menu__item">
              <a href="javascript:void(0);">item 2</a>
            </li>
            <li className="menu__item">
              <a href="javascript:void(0);">item 3</a>
            </li>
            <li className="menu__item">
              <a href="javascript:void(0);">item 4</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MenuPrimary;
