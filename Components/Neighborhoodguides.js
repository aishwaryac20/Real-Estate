import React from 'react';

function Neighborhoodguides() {
  
  const neighborhoods = [
    {
      id: 1,
      name: "School",
      description: "This involves designing, creating, and maintaining software applications and systems.It includes programming, testing, Software.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Pataskala_Elementary_School.jpg"
    },
    {
      id: 2,
      name: "Mall's",
      description: "Malls provide a one-stop shopping destination where consumers can find a wide range of products and services",
      image: "https://im.whatshot.in/img/2020/Nov/img-0283-cropped-1604989090.jpg"
    },
    {
        id: 3,
        name: "College",
        description: "A list of colleges with brief descriptions of each institution, including their specialties, notable programs.",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-546434759-1502380542.jpg?crop=1xw:0.7496463932107497xh;center,top&resize=1200:*"
      },
      
    
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Neighborhood Guides</h2>
      <div className="row">
        {neighborhoods.map(neighborhood => (
          <div key={neighborhood.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={neighborhood.image} className="card-img-top" alt={neighborhood.name} />
              <div className="card-body">
                <h5 className="card-title">{neighborhood.name}</h5>
                <p className="card-text">{neighborhood.description}</p>
                <a href="#" className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Neighborhoodguides;
