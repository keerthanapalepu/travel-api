// eslint-disable-next-line
import React, { useState, useEffect} from 'react';
import {CssBaseline,Grid} from '@material-ui/core';
import Header from './components/header/Header';
import Map from './components/map/Map';
import List from './components/list/List';
import { getPlacesData,  getGeoLocation } from './api';


const App = () => {
  const [places, setPlaces] = useState([]);
  const [clicked, setClicked] = useState(null);
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [type,setType] = useState('restaurants');
  const [rating,setRating] = useState(0);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);
  useEffect(() => {
     const filtered = places.filter((place) => Number(place?.rating) >= rating);

     setFilteredPlaces(filtered);
   }, [rating]);

  useEffect(() => {
     setIsLoading(true);
     getPlacesData(type,coordinates.lat , coordinates.lng)
    .then((data)=>{
      console.log(data);
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    })
  }, [coordinates,type]);


  const onPlaceChanged = (cityName) => {
    console.log(cityName);
     getGeoLocation(cityName)
     .then((data)=>{
       setCoordinates({ lat: data[0].lat, lng: data[0].lon });
     })
  };
  return (
    <>
      <CssBaseline />
      <Header onPlaceChanged={onPlaceChanged} />
      <Grid container spacing={3} style={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List isLoading={isLoading}
          places={filteredPlaces.length ? filteredPlaces : places}
           clicked={clicked}
           type={type}
           setType={setType}
            rating={rating}
             setRating={setRating}/>
        </Grid>
        <Grid item xs={12} md={8} >
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            setClicked={setClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default App;
