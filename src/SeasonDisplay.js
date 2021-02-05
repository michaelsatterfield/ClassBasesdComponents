import React from 'react';

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

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName, image} = seasonConfig[season]
    return (
        <div>
            <i className={`massive ${iconName} icon `}/>
            <h1>{text}</h1>
            <img src={image}></img>
            <i className={`massive ${iconName} icon`}/>

        </div>
    )
};

export default SeasonDisplay;
