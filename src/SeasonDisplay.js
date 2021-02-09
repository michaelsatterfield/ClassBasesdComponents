import './SeasonDisplay.css'
import React from 'react';

//****config function
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun',

    },
    winter: {
        text: "Burr it's chilly!",
        iconName: 'snowflake',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Snow_Scene_at_Shipka_Pass_1.JPG'
    }
};

//*****helper function******
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

//**************functional component************
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName, image} = seasonConfig[season]
    return (

        <div className={`season-display  ${season}`}>
            {/*<img src={image}></img>*/}
            <h1>{text}</h1>
            <i className={`icon-left massive ${iconName} icon `}/>
            <i className={`icon-right massive ${iconName} icon`}/>

            <h2 className={"latitude"}>Its {season}time </h2>
            <h2 className={"latitude2"}>your latitude is : {props.lat}</h2>
            <h2 className={"longitude"}>your longitude is : {props.long}</h2>
            <h2 className={"time"}>The time is: {props.time}</h2>
            </div>


    )
};

export default SeasonDisplay;
