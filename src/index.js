// class component
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // Definie & Intializing 'state'
  constructor(props) {
    // when using the constructor, it overrides the built in React.Component constructor
    super(props); // super is a referance to the parent React.Component

    this.state = { lat: null, lon: null, errorMessage: '' }; // Inializing 'state' direct assignment, JS object (key value pairs) with it's default value to null

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // updating the state, rerendering with setState
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }); // JS object
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <div className="ui raised very padded text container segment">
          <h3>Your GPS Location:</h3>
          <p>Lat: {this.state.lat}</p>
          <p>Long: {this.state.long}</p>
        </div>
      );
    }
    return <div>Loading........!</div>;
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

// Component Life Cycle

/* JS constructor()  // good place to do one-time set up
      is the very first function that is called in the instance that it's created
*/

// render() // Avoid doing anything besides returning JSX

/* Lifecycle Methods  

   componentDidMount() {   // place to do data-loading!
    console.log('My component was rendered to the screen');
  }

   componentDidUpdate() {  // place to do more data-loading when state/props change
    console.log('My component was just updated - it rerendered');
  }

  componentWillMount() {  // place to cleanup (especially no-React stuff)

  }
  */
