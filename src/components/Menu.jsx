import React from "react";
import "../assets/css/styles.css";
import BurgerImage from "../assets/images/burger.jpg"; // Import your burger image
import PizzaImage from "../assets/images/posho.jpeg"; // Import your pizza image
import PastaImage from "../assets/images/africantea.jpeg"; // Import your pasta image
import SaladImage from "../assets/images/break.jpeg"; // Import your salad image

const Menu = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center" style={{ color: "purple" }}>
        Our Menu | Delicious Offerings
      </h2>
      <div className="row">
        <div className="col-md-3">
          {/* Card 2 */}
          <div className="card">
            <div className="image-container">
              {/* ... (repeat the content structure) */}
              <img
                src={PizzaImage}
                className="img-fluid rounded thumbnail-image"
                alt="Pizza"
              />
            </div>
            <div className="product-detail-container p-2">
              {/* ... (repeat the content structure) */}
              <h5 className="item-name">Deluxe Margherita Pizza</h5>
              {/* ... (repeat the content structure) */}
              <span className="new-price">$10.99</span>
              {/* ... (repeat the content structure) */}
              <div className="d-flex">
                <button
                  className="badge bg-primary mx-2"
                  style={{ borderColor: "white" }}
                >
                  Regular
                </button>
                <button
                  className="badge bg-success ml-2"
                  style={{ borderColor: "white" }}
                >
                  Large
                </button>
              </div>
              {/* ... (repeat the content structure) */}
              <span className="rating-number">4.2</span>
              {/* ... (repeat the content structure) */}
              <span className="buy">ADD TO CART</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          {/* Card 2 */}
          <div className="card">
            <div className="image-container">
              {/* ... (repeat the content structure) */}
              <img
                src={PizzaImage}
                className="img-fluid rounded thumbnail-image"
                alt="Pizza"
              />
            </div>
            <div className="product-detail-container p-2">
              {/* ... (repeat the content structure) */}
              <h5 className="item-name">Deluxe Margherita Pizza</h5>
              {/* ... (repeat the content structure) */}
              <span className="new-price">$10.99</span>
              {/* ... (repeat the content structure) */}
              <div className="d-flex">
                <button
                  className="badge bg-primary mx-2"
                  style={{ borderColor: "white" }}
                >
                  Regular
                </button>
                <button
                  className="badge bg-success ml-2"
                  style={{ borderColor: "white" }}
                >
                  Large
                </button>
              </div>
              {/* ... (repeat the content structure) */}
              <span className="rating-number">4.2</span>
              {/* ... (repeat the content structure) */}
              <span className="buy">ADD TO CART</span>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          {/* Card 2 */}
          <div className="card">
            <div className="image-container">
              {/* ... (repeat the content structure) */}
              <img
                src={PizzaImage}
                className="img-fluid rounded thumbnail-image"
                alt="Pizza"
              />
            </div>
            <div className="product-detail-container p-2">
              {/* ... (repeat the content structure) */}
              <h5 className="item-name">Deluxe Margherita Pizza</h5>
              {/* ... (repeat the content structure) */}
              <span className="new-price">$10.99</span>
              {/* ... (repeat the content structure) */}
              <div className="d-flex">
                <button
                  className="badge bg-primary mx-2"
                  style={{ borderColor: "white" }}
                >
                  Regular
                </button>
                <button
                  className="badge bg-success ml-2"
                  style={{ borderColor: "white" }}
                >
                  Large
                </button>
              </div>
              {/* ... (repeat the content structure) */}
              <span className="rating-number">4.2</span>
              {/* ... (repeat the content structure) */}
              <span className="buy">ADD TO CART</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          {/* Card 2 */}
          <div className="card">
            <div className="image-container">
              {/* ... (repeat the content structure) */}
              <img
                src={PizzaImage}
                className="img-fluid rounded thumbnail-image"
                alt="Pizza"
              />
            </div>
            <div className="product-detail-container p-2">
              {/* ... (repeat the content structure) */}
              <h5 className="item-name">Deluxe Margherita Pizza</h5>
              {/* ... (repeat the content structure) */}
              <span className="new-price">$10.99</span>
              {/* ... (repeat the content structure) */}
              <div className="d-flex">
                <button
                  className="badge bg-primary mx-2"
                  style={{ borderColor: "white" }}
                >
                  Regular
                </button>
                <button
                  className="badge bg-success ml-2"
                  style={{ borderColor: "white" }}
                >
                  Large
                </button>
              </div>
              {/* ... (repeat the content structure) */}
              <span className="rating-number">4.2</span>
              {/* ... (repeat the content structure) */}
              <span className="buy">ADD TO CART</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
