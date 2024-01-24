import TheHeader from './components/TheHeader';
import { Component } from './core/heropy' ;

export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el
    const reouterView = document.createElement('router-view');

    this.el.append(
      theHeader,
      reouterView
    );
  }
}