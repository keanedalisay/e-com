import { Component } from "preact";

export default class NotFound extends Component {
  constructor() {
    super();
  }

  render() {
    return <>
      <h1>Page not found</h1>
      <p>Try a different URL or <a href="/">go back to the home page</a>.</p>
    </>
  }
}