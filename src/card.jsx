import React from "react";
import styled from "styled-components";

const Card = ({ userIcon, userName, description, socialLinks }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image">
          <div
            className="Usericon"
            style={{ backgroundImage: `url(${userIcon})` }}
          />
          <p className="UserName">{userName}</p>
        </div>

        <div className="Description">{description}</div>

        <div className="social-media">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox={link.svgViewBox} xmlns="http://www.w3.org/2000/svg">
                <path d={link.svgPath} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    border-radius: 20px;
    width: 190px;
    height: 254px;
    background: rgb(38, 38, 38);
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.333);
  }

  .image {
    border-radius: 20px 20px 0 0;
    height: 70px;
    background-color: #00bfff;
  }

  .Usericon {
    background-color: #414141;
    transform: translateX(10px) translateY(10px);
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-size: cover;
  }

  .UserName {
    width: 60%;
    background-color: #414141;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin: 0;
    transform: translateX(70px) translateY(-35px);
    border-radius: 5px;
  }

  .Description {
    border-color: #141414;
    background-color: #414141;
    color: #fff;
    transform: translate(5px, 6px);
    width: 180px;
    height: 130px;
    border-radius: 5px;
  }

  .social-media {
    display: flex;
    justify-content: center;

    margin-top: 10px;
  }

  .social-media a {
    margin-right: 10px;
    text-decoration: none;
    color: inherit;
  }

  .social-media a svg {
    color: #00bfff96;
    width: 20px;
    fill: currentColor;
  }
`;

export default Card;
