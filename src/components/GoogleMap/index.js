import React from 'react'
import GoogleMapReact from 'google-map-react'
import {key} from '../../info'

const GoogleMap = ({coords}) => {

  return (
    <GoogleMapReact
      bootstrapURLKeys={{key: key}}
      defaultCenter={{
        lat: +coords.latitude,
        lng: +coords.longitude
      }}
      defaultZoom={15}
      yesIWantToUseGoogleMapApiInternals
    >
      {/* <img 
        key={111}
        src="/spacelaunch//marker.png"
        alt=""
        lat={+coords.latitude}
        lng={+coords.longitude} 
        style={{width: '50px'}}
      /> */}
    </GoogleMapReact>
  )
}

export default GoogleMap