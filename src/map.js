import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA-FOEsjQwbAbbHqdVYWKNvzcsPw4Eooyo",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {props.isMarkerShown && 
    props.markers.map((marker)=>{
     return (
         <Marker key={marker.id} position={{lat:marker.lat,lng:marker.long}} onClick={props.onMarkerClick}/>
     )   
    })
    
    }
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 1000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent {...this.props}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.props.clickMarker}
      />
    )
  }
}
export default MyFancyComponent;