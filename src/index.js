import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./spinner";



class App extends React.Component {
    state = {lat: null, long: null, time: '',errorMessage: ''};

    componentDidMount() {
        //we called setState!      //this is a call back function
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude.toPrecision(4), long: position.coords.longitude.toPrecision(4)}),
            (err) => this.setState({errorMessage: err.message})
        );
        setInterval(() => {
                this.setState({time: new Date().toLocaleTimeString('en-US')})
            }, 1000)


    }


    //helper function***********
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} long={this.state.long} time={this.state.time}/>

        }

        return <Spinner message="Please allow location access."/>;
    }


    //render method
    render() {
        return (
            <div className={"border red"}>
                {this.renderContent()}

            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root')
);


