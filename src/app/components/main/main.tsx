import * as Chart from 'chart.js';
import * as React from 'react';
import Wampy from 'wampy';
import { Header } from '../header/header';
import { MonthVolume } from '../month-volume/month-volume';
import { Trollbox } from '../trollbox/trollbox';
import './main.scss';

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {

  helloWorld = 'H W !';
  connection: Wampy;
  apiuri: string;

  constructor() {
    super();
    this.connection = new Wampy(this.apiuri, {realm: 'realm1'});
    this.connection.subscribe('BTC_NXC', (dataArray, dataObj) => console.log(dataObj));
  }

  render() {
    return (
      <div>
        <Header/>
        <div className='container'>
          <MonthVolume/>
          <Trollbox/>
        </div>
      </div>
    );
  }

}
