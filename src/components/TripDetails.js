// src/components/TripDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/TripDetails.css';

const demoTrips = [
  {
    id: 1,
    title: 'Goa Beach Getaway',
    description: 'Enjoy 3 days of sun, sand, and sea in vibrant Goa.',
    image: '/images/goa.jpg',
    price: 6999,
    gallery: [
       '/images/goa1.jpg',
      '/images/goa2.jpg',
      '/images/goa3.jpg',
      '/images/goa4.jpg',
      '/images/goa5.jpg',
      '/images/goa6.jpg',
      '/images/goa7.jpg',
      '/images/goa8.jpg',
      '/images/goa9.jpg',
      '/images/goa10.jpg',
      '/images/goa11.jpg',
      '/images/goa12.jpg',
      '/images/goa13.jpg',
      '/images/goa14.jpg',
      '/images/goa15.jpg',
      '/images/goa16.jpg',
      '/images/goa17.jpg'
    ],
  },
  {
    id: 2,
    title: 'Himalayan Trek Adventure',
    description: 'Breathtaking peaks and peaceful trails await you.',
    image: '/images/himalaya.jpg',
    price: 8999,
    gallery: [
      '/images/himalaya1.jpg',
      '/images/himalaya2.jpg',
      '/images/himalaya3.jpg',
      '/images/himalaya4.jpg',
      '/images/himalaya5.jpg',
      '/images/himalaya6.jpg',
      '/images/himalaya7.jpg',
      '/images/himalaya8.jpg',
      '/images/himalaya9.jpg',
      '/images/himalaya10.jpg',
      '/images/himalaya11.jpg',
      '/images/himalaya12.jpg',
      '/images/himalaya13.jpg',
      '/images/himalaya14.jpg',
      '/images/himalaya15.jpg',
      '/images/himalaya16.jpg',
      '/images/himalaya17.jpg'

    ],
  },
  {
    id: 3,
    title: 'Kerala Backwaters Escape',
    description: 'Sail through Kerala’s lush and tranquil waterways.',
    image: '/images/kerala.jpg',
    price: 7999,
    gallery: [
      '/images/kerala1.jpg',
      '/images/kerala2.jpg',
      '/images/kerala3.jpg',
      '/images/kerala4.jpg',
      '/images/kerala5.jpg',
      '/images/kerala6.jpg',
      '/images/kerala7.jpg',
      '/images/kerala8.jpg',
      '/images/kerala9.jpg',
      '/images/kerala10.jpg',
      '/images/kerala11.jpg',
      '/images/kerala12.jpg',
      '/images/kerala13.jpg',
      '/images/kerala14.jpg',
      '/images/kerala15.jpg',
      '/images/kerala16.jpg',
      '/images/kerala17.jpg'
    ],
  },
  {
    id: 4,
    title: 'Rajasthan Desert Safari',
    description: 'Ride camels, explore forts, and experience royal vibes.',
    image: '/images/rajasthan.jpg',
    price: 7499,
    gallery: [
      '/images/rajasthan1.jpg',
      '/images/rajasthan2.jpg',
      '/images/rajasthan3.jpg',
      '/images/rajasthan4.jpg',
      '/images/rajasthan5.jpg',
      '/images/rajasthan6.jpg',
      '/images/rajasthan7.jpg',
      '/images/rajasthan8.jpg',
      '/images/rajasthan9.jpg',
      '/images/rajasthan10.jpg',
      '/images/rajasthan11.jpg',
      '/images/rajasthan12.jpg',
      '/images/rajasthan13.jpg',
      '/images/rajasthan14.jpg',
      '/images/rajasthan15.jpg',
      '/images/rajasthan16.jpg',
      '/images/rajasthan17.jpg'
    ],
  },
  {
    id: 5,
    title: 'Manali Snow Retreat',
    description: 'Cozy cabins and snowy slopes in magical Manali.',
    image: '/images/manali.jpg',
    price: 8299,
    gallery: [
      '/images/manali1.jpg',
      '/images/manali2.jpg',
      '/images/manali3.jpg',
      '/images/manali4.jpg',
      '/images/manali5.jpg',
      '/images/manali6.jpg',
      '/images/manali7.jpg',
      '/images/manali8.jpg',
      '/images/manali9.jpg',
      '/images/manali10.jpg',
      '/images/manali11.jpg',
      '/images/manali12.jpg',
      '/images/manali13.jpg',
      '/images/manali14.jpg',
      '/images/manali15.jpg',
      '/images/manali16.jpg',
      '/images/manali17.jpg'
    ],
  },
  {
    id: 6,
    title: 'Andaman Island Explorer',
    description: 'Crystal clear waters and white sands await.',
    image: '/images/andaman.jpg',
    price: 9999,
    gallery: [
      '/images/andaman1.jpg',
      '/images/andaman2.jpg',
      '/images/andaman3.jpg',
      '/images/andaman4.jpg',
      '/images/andaman5.jpg',
      '/images/andaman6.jpg',
      '/images/andaman7.jpg',
      '/images/andaman8.jpg',
      '/images/andaman9.jpg',
      '/images/andaman10.jpg',
      '/images/andaman11.jpg',
      
    ],
  },
  {
    id: 7,
    title: 'Meghalaya Cave Expedition',
    description: 'Discover hidden caves and waterfalls in the northeast.',
    image: '/images/meghalaya.jpg',
    price: 8599,
    gallery: [
      '/images/meghalaya1.jpg',
      '/images/meghalaya2.jpg',
      '/images/meghalaya3.jpg',
      '/images/meghalaya4.jpg',
      '/images/meghalaya5.jpg',
      '/images/meghalaya6.jpg',
      '/images/meghalaya7.jpg',
      '/images/meghalaya8.jpg',
      '/images/meghalaya9.jpg'
    ],
  },
  {
    id: 8,
    title: 'Kashmir Heaven Tour',
    description: 'Dal Lake, mountains, and unforgettable serenity.',
    image: '/images/kashmir.jpg',
    price: 10499,
    gallery: [
      '/images/kashmir1.jpg',
      '/images/kashmir2.jpg',
      '/images/kashmir3.jpg',
      '/images/kashmir4.jpg',
      '/images/kashmir5.jpg',
      '/images/kashmir6.jpg',
      '/images/kashmir7.jpg',
      '/images/kashmir8.jpg',
      '/images/kashmir9.jpg',
      '/images/kashmir10.jpg',
      '/images/kashmir11.jpg',
      '/images/kashmir12.jpg',
      '/images/kashmir13.jpg'
    ],
  },
  {
    id: 9,
    title: 'Coorg Coffee Hills Escape',
    description: 'Chill in the misty hills and coffee plantations.',
    image: '/images/coorg.jpg',
    price: 7699,
    gallery: [
      '/images/coorg1.jpg',
      '/images/coorg2.jpg',
      '/images/coorg3.jpg',
      '/images/coorg4.jpg',
      '/images/coorg5.jpg'
    ],
  },
  {
    id: 10,
    title: 'Sikkim Serenity Tour',
    description: 'Buddhist monasteries, lakes, and peace of mind.',
    image: '/images/sikkim.jpg',
    price: 8899,
    gallery: [
      '/images/sikkim1.jpg',
      '/images/sikkim2.jpg',
      '/images/sikkim3.jpg',
      '/images/sikkim4.jpg',
      '/images/sikkim5.jpg',
      '/images/sikkim6.jpg',
      '/images/sikkim7.jpg',
      '/images/sikkim8.jpg',
      '/images/sikkim9.jpg',
      '/images/sikkim10.jpg',
      '/images/sikkim11.jpg',
      '/images/sikkim12.jpg',
      '/images/sikkim13.jpg',
      '/images/sikkim14.jpg',
      '/images/sikkim15.jpg',
      '/images/sikkim16.jpg'
    ],
  },
];
const TripDetails = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    const selectedTrip = demoTrips.find(t => t.id === parseInt(id));
    setTrip(selectedTrip);
  }, [id]);

  if (!trip) return <div className="trip-details-container">Trip not found.</div>;

  return (
    <div className="trip-details-wrapper">
      <div className="trip-details-container">
        <div className="trip-image-section">
          <img src={trip.image} alt={trip.title} className="trip-details-image" />
        </div>
        <div className="trip-info-section">
          <h2>{trip.title}</h2>
          <p>{trip.description}</p>
          <h3 className="price-tag">₹{trip.price}</h3>
          <Link to={`/book/${trip.id}`} className="book-btn">Book Now</Link>
        </div>
      </div>

      <div className="trip-gallery-section">
        <h3>Gallery</h3>
        <div className="gallery-thumbnails-only">
          {trip.gallery.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index + 1}`} className="thumb-img" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripDetails;