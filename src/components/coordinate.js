import React from 'react';



class coordinate extends React.Component{

    constructor(props){
        super(props);
        this.getLocation = this.getLocation.bind(this);
    }

    // get current location
    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                alert('Latitude: ' + position.coords.latitude
                    + '\nLongitude: ' + position.coords.longitude)     
            });            
        } else {
            alert('browser does not support geolocation');
        }
    }

    render(){
        return(
        <div>
            <button onClick={this.getLocation}>Click to get Location</button>
        </div>
        );
    }
}

export default coordinate;