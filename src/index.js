import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";


class App extends React.Component {
    constructor(props) {
        super(props);
        //only time we do direct assignment!!!
        this.state = {lat: null, errorMessage: ''};
        //this is a call back function
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setState!
                this.setState({lat: position.coords.latitude.toPrecision(4)})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }
    //must define render in react
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div> {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root')
);


