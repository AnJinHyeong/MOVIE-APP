import { Component } from "../core/heropy";

export default class NotFound extends Component{
  render() {
    this.el.classList.add('container', 'not-found')
    this.el.innerHTML = /* html */`
      <h1>
        Soory..<br/>
        Page Not Found
      </h1>
    `
  }
}