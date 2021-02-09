import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import Spinner from "./spinner";


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

   renderContent(){
       if(this.state.errorMessage && !this.state.lat){
           return <div> {this.state.errorMessage}</div>
       }

       if (!this.state.errorMessage && this.state.lat){
           return <SeasonDisplay lat={this.state.lat} />
       }

       return <Spinner message="Please allow location access."/>;
}



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


