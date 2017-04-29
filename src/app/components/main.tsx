import * as React from 'react';
import { Header } from './header/header';
import * as rxwamp from 'rx.wamp';
import  { Observable } from 'rx';

interface IMainProps {};

interface IMainState {};

export class Main extends React.Component<IMainProps, IMainState> {

  helloWorld = 'H W !';

  render() {
    return (
      <div>
        <Header/>
        <div>{this.helloWorld}</div>
      </div>
    );
  }
}
