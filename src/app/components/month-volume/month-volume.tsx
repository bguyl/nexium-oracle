import * as Chartist from 'chartist';
import * as React from 'react';
import Wampy from 'wampy';

interface IMonthVolumeProps {};

interface IMonthVolumeState {};

export class MonthVolume extends React.Component<IMonthVolumeProps, IMonthVolumeState> {

  chart: Chartist;
  data: {
    series: number[][],
    labels: string[]
  } = { labels: [], series: [[]] };

  constructor() {
    super();
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
    this.chart = Chartist.Line('.ct-chart', this.data);
  }

}
