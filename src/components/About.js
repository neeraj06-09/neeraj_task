import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            
            <h1>Our Story</h1>
            <p>
            Contrary to industry standard strategy, USPizza, since 1996, has been committed to growing our brand slowly and steadily. Every outlet is carefully selected on strict criteria. To be a USPizza franchisee is a privilege unto itself.  </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                More About Us
              </a>
            </div>
          </div> 
          <div className="col-6">
            <div className="about__img">
              <img src="https://uspizza.in/images/story-front.jpg" alt="Pizza" />
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default About;
