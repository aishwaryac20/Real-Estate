import React from 'react';

function Testimonials() {
  
  const testimonials = [
    {
      id: 1,
      name: "Sonam Patil",
      testimonial: "I had a wonderful experience working with this real estate agency. They helped me find the perfect home for my family within my budget. Highly recommended!",
      
    },
    {
      id: 2,
      name: "Sumitra Pawar",
      testimonial: "Having a detailed knowledgebase, FAQ, Case Studies, etc., on your website. Many customers prefer to find the answer themselves rather than talking to someone from the company",
      
    },
    {
      id: 3,
      name: "Ankkita Chavan",
      testimonial: "I'm extremely satisfied with the services provided by this real estate agency. They understood my requirements and found me a property that exceeded my expectations. Thank you!",
      
    },
    
    
  ];

  return (
    
    <div className="container mt-5">
    <h2 className="text-center mb-4">Testimonials</h2>
    <div className="row">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <p className="card-text">{testimonial.testimonial}</p>
            </div> 
            <div className="card-footer d-flex align-items-center">
             
                <h5 className="card-title mb-0">{testimonial.name}</h5>
              </div>
            </div>
          </div>
        
      ))}
    </div>
  </div>
);
}

export default Testimonials;
