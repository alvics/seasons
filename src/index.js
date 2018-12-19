// class component
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // Definie & Intializing 'state'
  constructor(props) {
    // when using the constructor, it overrides the built in React.Component constructor
    super(props); // super is a referance to the parent React.Component

    this.state = { lat: null }; // Inializing 'state' direct assignment, JS object (key value pairs) with it's default value to null

    window.navigator.geolocation.getCurrentPosition(
      position => {
          // updating the state, rerendering
          this.setState({ lat: position.coords.latitude }) // JS object
      },
      err => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// Understanding 'state'

/* Only usable with class components,
   You will confuse props with this.state,
   'state' is a JS object that contains data relevant to a component,
   Updating 'state' on a component causes the component to (almost) instantly rerender,
   'state' must be initialized when a component is created (constructor), 
   'state' can ONLY be updated using the function 'setState'
   */

/* JS constructor() 
      is the very first function that is called in the instance that it's created
   */
