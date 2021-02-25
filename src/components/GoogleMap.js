import React from 'react'
import GoogleMapReact from 'google-map-react'
import {key} from '../info'

const GoogleMap = ({options}) => {
  let defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  return (
    <GoogleMapReact
      bootstrapURLKeys={{key: key}}
      defaultCenter={defaultProps?.center}
      defaultZoom={defaultProps?.zoom}
      yesIWantToUseGoogleMapApiInternals
    >
      {/* <div lat={59.955413}
      lng={30.337844}>
        TEST
      </div> */}
    </GoogleMapReact>
  )
}

export default GoogleMap