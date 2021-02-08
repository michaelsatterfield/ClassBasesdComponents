import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";


class App extends React.Component {
    state = {lat: null, errorMessage:''};
    // constructor(props) {
    //     super(props);
    //     // //only time we do direct assignment!!!
    //     // this.state = {lat: null, errorMessage: ''};
    // }


    componentDidMount() {
        //we called setState!      //this is a call back function
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude.toPrecision(4)}),
              (err) => this.setState({errorMessage: err.message})
        );
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('component was updated!')
    // }

    //must define render in react
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div> {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return
    }
}

ReactDOM.render(<App/>, document.querySelector('#root')
);


