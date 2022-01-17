import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://uspizza.in/images/home-box1.jpg" alt="starter" />
              </div>
              <h1 className="price__heading">Starter</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
           
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://uspizza.in/images/home-box2.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
             
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://uspizza.in/images/home-box3.jpg" alt="pasta" />
              </div>
              <h1 className="price__heading">Pasta</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
           
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://uspizza.in/images/home-box4.jpg" alt="drink" />
              </div>
              <h1 className="price__heading">Cafe Casa Blanca</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
             
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://uspizza.in/images/home-box5.jpg" alt="chicken" />
              </div>
              <h1 className="price__heading">Fried Chicken</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
              
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="https://uspizza.in/images/home-box6.jpg" alt="wings" />
              </div>
              <h1 className="price__heading">Wings World</h1>
              <p className="price__text">
                <a href="">Order Now</a>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
