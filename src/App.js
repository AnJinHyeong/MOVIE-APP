import { Component } from './core/heropy' ;

export default class App extends Component {
  render() {
    const reouterView = document.createElement('router-view');

    this.el.append(reouterView);
  }
}