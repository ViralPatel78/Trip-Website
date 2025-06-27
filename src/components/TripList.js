// src/components/TripList.js
import React, { useState, useEffect } from 'react';
import TripCard from './TripCard';
import '../styles/TripList.css';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  // Simulated data fetch (replace with API later)
  useEffect(() => {
    const demoTrips = [
  {
    id: 1,
    title: 'Goa Beach Getaway',
    description: 'Enjoy 3 days of sun, sand, and sea in vibrant Goa.',
    image: '/images/goa.jpg',
    price: 6999,
  },
  {
    id: 2,
    title: 'Himalayan Trek Adventure',
    description: 'Breathtaking peaks and peaceful trails await you.',
    image: '/images/himalaya.jpg',
    price: 8999,
  },
  {
    id: 3,
    title: 'Kerala Backwaters Escape',
    description: 'Sail through Kerala’s lush and tranquil waterways.',
    image: '/images/kerala.jpg',
    price: 7999,
  },
  {
    id: 4,
    title: 'Rajasthan Desert Safari',
    description: 'Ride camels, explore forts, and experience royal vibes.',
    image: '/images/rajasthan.jpg',
    price: 7499,
  },
  {
    id: 5,
    title: 'Manali Snow Retreat',
    description: 'Cozy cabins and snowy slopes in magical Manali.',
    image: '/images/manali.jpg',
    price: 8299,
  },
  {
    id: 6,
    title: 'Andaman Island Explorer',
    description: 'Crystal clear waters and white sands await.',
    image: '/images/andaman.jpg',
    price: 9999,
  },
  {
    id: 7,
    title: 'Meghalaya Cave Expedition',
    description: 'Discover hidden caves and waterfalls in the northeast.',
    image: '/images/meghalaya.jpg',
    price: 8599,
  },
  {
    id: 8,
    title: 'Kashmir Heaven Tour',
    description: 'Dal Lake, mountains, and unforgettable serenity.',
    image: '/images/kashmir.jpg',
    price: 10499,
  },
  {
    id: 9,
    title: 'Coorg Coffee Hills Escape',
    description: 'Chill in the misty hills and coffee plantations.',
    image: '/images/coorg.jpg',
    price: 7699,
  },
  {
    id: 10,
    title: 'Sikkim Serenity Tour',
    description: 'Buddhist monasteries, lakes, and peace of mind.',
    image: '/images/sikkim.jpg',
    price: 8899,
  },
];

    setTrips(demoTrips);
  }, []);

  return (
    <div className="trip-list-container">
      <h2 className="trip-list-heading">Explore Our Best Trips</h2>
      {trips.length === 0 ? (
        <p className="no-trips">No trips available at the moment.</p>
      ) : (
        <div className="trip-grid">
          {trips.map(trip => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TripList;
