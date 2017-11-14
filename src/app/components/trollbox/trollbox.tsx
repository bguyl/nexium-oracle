import * as React from 'react';
import Wampy from 'wampy';
import './trollbox.scss';

interface ITrollboxProps {};

interface ITrollboxState {
  datarender: any[];
};

export class Trollbox extends React.Component<ITrollboxProps, ITrollboxState> {

  connection: Wampy;
  apiuri = 'wss://api.poloniex.com';
  datarender: any[] = [];
  count = 0;


  constructor(props: any) {
    super(props);
    this.state = { datarender: [] };
    this.connection = new Wampy(this.apiuri, {realm: 'realm1'});
    this.connection.subscribe('trollbox', (dataArray, dataObj) => {
      console.log('data');
      this.datarender.push(<li><strong>{dataArray[2]}</strong> {dataArray[3]}</li>);
      this.setState({datarender: this.datarender});
    });
  }

  render() {
    return (
      <div>
        <div className='mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__menu'>
            <button className='mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect'>
              <i className='nxc-fa fa fa-trash-o'></i>
            </button>
          </div>
          <div className='mdl-card__title'>
            <h2 className='mdl-card__title-text'>Poloniex Trollbox about Nexium</h2>
          </div>
          <div className='mdl-card__supporting-text nxc-trollbox'>
              <ul className='nxc-trollbox'>{this.state.datarender}</ul>
          </div>
        </div>
      </div>
    );
  }

}
