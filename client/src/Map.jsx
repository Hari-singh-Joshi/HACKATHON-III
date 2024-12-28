import React, { useEffect } from 'react';
import './App.css'
import Navbar from './Navbar';
import Footer from './Footer'
function Map() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB9F_TYlVTbFk6diKpBt3qj8IP_5eVS4UI&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            initMap();
        };

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    function initMap() {
        let map;
        const directionsService = new window.google.maps.DirectionsService();
        const directionsDisplay = new window.google.maps.DirectionsRenderer();

        map = new window.google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });

        directionsDisplay.setMap(map);

        const geocoder = new window.google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', () => {
            geocodeAddress(geocoder, map);
        });
    }

    function geocodeAddress(geocoder, map) {
        const address = document.getElementById('destination').value;

        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK') {
                map.setCenter(results[0].geometry.location);
                const marker = new window.google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });

                calculateAndDisplayRoute(results[0].geometry.location);
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }

    function calculateAndDisplayRoute(destination) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const origin = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                const request = {
                    origin: origin,
                    destination: destination,
                    travelMode: 'DRIVING'
                };

                directionsService.route(request, (result, status) => {
                    if (status === 'OK') {
                        directionsDisplay.setDirections(result);
                    } else {
                        alert('Directions request failed due to ' + status);
                    }
                });
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    function calculateDistanceToDestination() {
        const destination = document.getElementById('destination').value;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const origin = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                const service = new window.google.maps.DistanceMatrixService();
                service.getDistanceMatrix({
                    origins: [origin],
                    destinations: [destination],
                    travelMode: 'DRIVING',
                    unitSystem: window.google.maps.UnitSystem.METRIC,
                    avoidHighways: false,
                    avoidTolls: false
                }, (response, status) => {
                    if (status === 'OK') {
                        const distance = response.rows[0].elements[0].distance.text;
                        const duration = response.rows[0].elements[0].duration.text;

                        const output = document.getElementById('output');
                        output.innerHTML = `Distance from your current location to ${destination}: ${distance}<br>Time: ${duration}`;
                    } else {
                        alert('Error: ' + status);
                    }
                });
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    return (
        <div>
            <div><Navbar/></div>
            <div id="map" style={{ height: '400px', width: '100%' }} className='mt-5'></div>
            <div id="output"></div>
            <label htmlFor="destination">Destination:</label>
            <input type="text" id="destination" />
            <button class="btn btn btn-success m-4" id="submit" onClick={calculateDistanceToDestination}>Calculate Distance</button>
       <div><Footer/></div>
        </div>
    );
}

export default Map;
