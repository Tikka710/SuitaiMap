import GoogleMapReact from 'google-map-react';
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';


export const GoogleMap: FC = () => {

    const [map, setMap] = useState(null);
    const [maps, setMaps] = useState(null);
    const [marker, setMarker] = useState(null);
    const [geocoder, setGeocoder] = useState(null)
    const [address, setAddress] = useState(null);
  
    const defaultLatLng = {
      lat: 35.7022589,
      lng: 139.7744733,
    };

    const getMyplace = () => {
        let output = document.getElementById("result");
        if(!navigator.geolocation){ //Geolocation apiがサポートされていない場合
            output.innerHTML = "<p>Geolocationはあなたのブラウザーでサポートされておりません</p>";
            return;
        }
        function success(position){
            let latitude  = position.coords.latitude;//緯度
            let longitude = position.coords.longitude;//経度

            // 位置情報
    var latlng = new maps.LatLng( latitude , longitude ) ;
    // Google Mapsに書き出し
        }
    }
  
    // map, maps で受け取ると変数が被るので object で受け取っています
    const handleApiLoaded = (object) => {
      setMap(object.map);
      setMaps(object.maps);
      setGeocoder(new object.maps.Geocoder());
    };
  
    const setLatLng = ({ x, y, lat, lng, event }) => {
      if (marker) {
        marker.setMap(null);
      }
      const latLng = {
        lat,
        lng,
      };
      setMarker(new maps.Marker({
        map,
        position: latLng,
      }));
      map.panTo(latLng);
    };

    const search = () => {
        geocoder.geocode({
          address,
        }, (results, status) => {
          if (status === maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            if (marker) {
              marker.setMap(null);
            }
            setMarker(new maps.Marker({
              map,
              position: results[0].geometry.location,
            }));
            console.log(results[0].geometry.location.lat());
            console.log(results[0].geometry.location.lng());
          }
        });
      };
  

      return (
        
          <div style={{ height: '445px', width: '998px' }}>
    
        <input placeholder="GoogleMapを検索する" className={classNames(styles.SearchInput)} type="text" onChange={(e) => setAddress(e.target.value)} />
        <button type="button" className={classNames(styles.SearchButton)} onClick={search}>検索</button>
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
                defaultCenter={defaultLatLng}
                defaultZoom={16}
                onClick={setLatLng}
                onGoogleApiLoaded={handleApiLoaded}
            />
          </div>
      )
}