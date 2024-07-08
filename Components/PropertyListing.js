
import React from 'react';


function PropertyListing() {

  const properties = [
    {
      id: 1,
      title: "Shree Sai",
      price: "600,000 Rs",
      location: "Pune",
      bedrooms: 2,
      bathrooms: 2,
      area: "1500 sq ft",
      image: "https://i0.wp.com/www.landlordguidance.com/wp-content/uploads/2020/09/Rental-Property-Listing-Photograph-Example.jpg?resize=2090%2C1306&ssl=1"
    },
    {
      id: 2,
      title: "SouthMade ",
      price: "200000 Rs",
      location: "Kharadi",
      bedrooms: 5,
      bathrooms: 4,
      area: "3500 sq ft",
      image: "https://s3-us-west-2.amazonaws.com/virtuance-media/virtuance-prod/wp-content/uploads/2020/04/17125050/virtuance_real_estate_listing_1_denver.jpg"
    },
    {
      id: 3,
      title: "Mill Cottage",
      price: "500,000 Rs",
      location: "Magarpatta,Hadfsar",
      bedrooms: 6,
      bathrooms: 3,
      area: "1500 sq ft",
      image: "https://tse4.mm.bing.net/th?id=OIP.y7zkIoXAEvDct4XPK5DX2gHaE8&pid=Api&P=0&h=180"

    },

  ];
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Property Listing</h2>
      <div className="row">
        {properties.map(property => (
          <div key={property.id} className="column col-md-4 mb-4">
            <div className="card">
              <img src={property.image} className="card-img-top" alt={property.title} />
              <div className="card-body">
                <h5 className="card-title">{property.title}</h5>
                <p className="card-text"><strong>Price:</strong> {property.price}</p>
                <p className="card-text"><strong>Location:</strong> {property.location}</p>
                <p className="card-text"><strong>Bedrooms:</strong> {property.bedrooms}</p>
                <p className="card-text"><strong>Bathrooms:</strong> {property.bathrooms}</p>
                <p className="card-text"><strong>Area:</strong> {property.area}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyListing;
