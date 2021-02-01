import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";


class App extends React.Component {
    constructor(props) {
        super(props);
        //only time we do direct assignment!!!
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setState!
                this.setState({lat: position.coords.latitude})
            },
            (err) => console.log(err)
        );
    }

    render() {

        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root')
);


