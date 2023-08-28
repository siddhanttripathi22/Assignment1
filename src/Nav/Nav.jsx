import React from "react";
import "./nav.css";
import truck from "../assests/truck.svg";
import insta from "../assests/insta.svg";
import linkedin from "../assests/linkedin.svg";
import twitter from "../assests/twitter.svg";
import fb from "../assests/fb.svg";
import borderImg from "../assests/nav-border-img.svg";

const Nav = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <div className="social-media">
      <div className="topbar">
        <div>
          <img className="img-truck" src={truck} />
          <p> Free Delivery | Return Policy</p>
        </div>
        <div>
          <p className="login-btn">Login</p>
          <div>
            <p>Follow US</p>
            <img className="img-fb" src={fb} />
            <img className="img-li" src={linkedin} />
            <img className="img-tw" src={twitter} />
            <img className="img-in" src={insta} />
          </div>
        </div>
      </div>

      <div>
        <div className="header">
          <div>
            <p>ShopKart</p>
            <div>
              <p>Wishlist(0)</p>
              <p>Bag(0)</p>
            </div>
          </div>
          <div>
            <img className="border-img" src={borderImg} />
          </div>
        </div>

        <ul className="nav">
          {navbar.map((item, i) => {
            return (
              <div index={item?.id}>
                <li className={item?.id === "product" ? 'active' :'' }>{item?.name}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
