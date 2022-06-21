import React from "react";

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
];

const demos = {
  gmap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.812408026513!2d121.08951151535182!3d14.60975978076766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b86d067889a1%3A0x76c43b1dce9effa2!2sHappy%20Print%20Advertising!5e0!3m2!1sen!2sph!4v1652341592427!5m2!1sen!2sph" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
  
}
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
export default function GoogleMap() {
  return (
    <div className="google-map" id="contact-map">
      
      <Iframe iframe={demos["gmap"]} allow="autoplay"  />,
      {/* <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyDfpGBFn5yRPvJrvAKoGIdj1O1aO9QisgQ",
          language: "en",
          region: "US"
        }}
        // defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultCenter={{ lat: 14.581850, lng: 121.076270 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}
      </GoogleMapReact> */}
    </div>
  );
}
