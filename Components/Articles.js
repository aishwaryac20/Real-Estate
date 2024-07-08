import React from 'react';

function Article() {
  
  const articles = [
    {
      id: 1,
      title: "Be upfront with your clients",
      author: "Prasad Chavan",
      date: "May 19, 2023",
      image: "https://i.pinimg.com/originals/48/62/4c/48624c8d431eb1ad14034d1b4e22d7d8.jpg",
      content: "A big change we made — one that changes the ball game and one I highly recommend every team makes — is to use the team review system,” remarked Robert Trefethren, director of strategy and development for Fargo, ND-based Hatch Realty, which has more than 400 reviews. “We were doing them all under individual profiles, but if people expect their agents to go out and get reviews, they’re kidding themselves."
    },
    {
      id: 2,
      title: "The Benefits of Investing in Real Estate",
      author: "Tejas Mahske",
      date: "February 5, 2024",
      image: "https://images7.alphacoders.com/341/341475.jpg",
      content: "Real estate investment offers numerous benefits, including passive income, long-term appreciation, and tax advantages. Learn more about why investing in real estate can be a lucrative opportunity to build wealth and secure your financial future."
    },
    {
      id: 3,
      title: "How to Stage Your Home for a Quick Sale",
      author: "Rahul Jain",
      date: "February 20, 2024",
      image: "http://cdn.wallpapersafari.com/67/37/7M0P6i.jpg",
      content: "Staging your home can significantly impact its sale price and how quickly it sells. Discover expert tips on how to stage your home effectively to attract potential buyers, showcase its best features, and maximize its selling potential."
    }
    
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Articles</h2>
      <div className="row">
        {articles.map(article => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={article.image} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">By {article.author}</p>
                <p className="card-text">{article.date}</p>
                <p className="card-text">{article.content}</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Article;
