import * as React from 'react';
import './header.scss';

interface IHeaderProps {};

interface IHeaderState {};

export class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    return (
      <div>
        <div className='nxc-header mdl-layout mdj-js-layout mdl-layout--fixed-header'>
          <header className='mdl-layout__header-row'>
            <span className='nxc-header-title mdl-layout-title'>Nexium Oracle</span>
            <div className='mdl-layout-spacer'></div>
            <nav className='mdl-navigation'>
              <a className='mdl-navigation__link' href='https://beyond-the-void.net'>BEYOND THE VOID</a>
              <a className='mdl-navigation__link' href='http://market.beyond-the-void.net/'>STORE</a>
              <a className='mdl-navigation__link' href='https://www.poloniex.com/'>POLONIEX</a>
              <a className='mdl-navigation__link' href='https://beyond-the-void.slack.com/'>SLACK</a>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}
