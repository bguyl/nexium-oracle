// import * as Chart from 'chart.js';
import * as Chartist from 'chartist';
import * as React from 'react';
import Wampy from 'wampy';

interface IMonthVolumeProps {};

interface IMonthVolumeState {};

export class MonthVolume extends React.Component<IMonthVolumeProps, IMonthVolumeState> {

  connection: Wampy;
  apiuri = 'wss://api.poloniex.com';
  // data: number[] = [];
  // chart: Chart;
  chart: Chartist;
  data: {
    series: number[][],
    labels: string[]
  } = { labels: [], series: [[]] };
  count = 0;

  constructor() {
    super();
    this.connection = new Wampy(this.apiuri, {realm: 'realm1'});
    this.connection.subscribe('BTC_NXC', (dataArray, dataObj) => {
      for (let d of dataArray) {
        if (d.type && d.type === 'orderBookModify') {
          this.data.labels.push((this.count++).toString());
          this.data.series[0].push(d.data.amount);
          if (this.data.series[0].length > 2) {
            this.data.labels.push();
            this.data.series[0].reverse;
            this.data.series[0].pop;
            this.data.series[0].reverse;
          }
          this.chart.update(this.data);
        }
      }
    });
  }

  render() {
    return (
      <div>
        <div className='mdl-card mdl-shadow--2dp'>
          <div className='mdl-card__title'>
            <h2 className='mdl-card__title-text'>Last month volume</h2>
          </div>
          <div className='mdl-card__supporting-text'>
            <div className='ct-chart ct-perfect-fourth'></div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // this.chart = new Chart('chart', {
    //   type: 'line',
    //   data: this.data
    // });
    this.chart = Chartist.Line('.ct-chart', this.data);
  }

}
