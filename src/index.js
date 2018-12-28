// class component
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: '' }; // Inializing 'state' direct assignment, JS object (key value pairs) with it's default value to null

  componentDidMount() {
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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.long) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.long) {
      return (
        <div className="ui raised very padded text container segment">
          {/*  <p>Lat: {this.state.lat}</p>  */}
          {/*    <p>Long: {this.state.long}</p> */}
          <SeasonDisplay lat={this.state.lat} long={this.state.long} />
        </div>
      );
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
