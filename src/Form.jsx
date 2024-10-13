import React, { useState } from "react";
import styled from "styled-components";
import Card from "./card";

const Form = () => {
  const [userIcon, setUserIcon] = useState("");
  const [userName, setUserName] = useState("");

  const [description, setDescription] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [cards, setCards] = useState([]);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Create new card object with the form data
    const newCard = {
      userIcon,
      userName,

      description,
      socialLinks: [
        {
          url: twitterLink,
          svgPath:
            "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
          svgViewBox: "0 0 512 512",
        },
        {
          url: instagramLink,
          svgPath:
            "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.6 102.7-9 132.1z",
          svgViewBox: "0 0 448 512",
        },
        {
          url: linkedinLink,
          svgPath:
            "M100.3 448H7.4V149.3h92.9V448zm-46.4-337.4C20.4 110.6 0 87.3 0 61.4 0 27.5 22.5 0 50.2 0c27.7 0 50.2 22.5 50.2 50.3 0 26.2-20.5 50.4-50.2 50.4zm397.3 337.4h-92.9V303.4c0-34.2-1.3-78.1-47.6-78.1-47.7 0-55 37.4-55 76.2v146.4h-92.9V149.3h89.3v41.2h1.3c12.4-23.5 42.6-48.2 87.8-48.2 94.0 0 111.5 61.8 111.5 142.4v205.1z",
          svgViewBox: "0 0 448 512",
        },
      ],
    };

    setCards([...cards, newCard]);

    // Clear form inputs
    setUserIcon("");
    setUserName("");

    setDescription("");
    setTwitterLink("");
    setInstagramLink("");
    setLinkedinLink("");
  }

  return (
    <>
      <StyledWrapper>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Register</p>

          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <span>Name</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              value={userIcon}
              onChange={(e) => setUserIcon(e.target.value)}
              required
            />
            <span>User Icon URL</span>
          </label>

          <label>
            <input
              className="input"
              type="text"
              placeholder=""
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <span>Description</span>
          </label>

          {}
          <label>
            <input
              className="input"
              type="url"
              placeholder=""
              value={twitterLink}
              onChange={(e) => setTwitterLink(e.target.value)}
            />
            <span>Twitter Link</span>
          </label>

          <label>
            <input
              className="input"
              type="url"
              placeholder=""
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
            />
            <span>Instagram Link</span>
          </label>

          <label>
            <input
              className="input"
              type="url"
              placeholder=""
              value={linkedinLink}
              onChange={(e) => setLinkedinLink(e.target.value)}
            />
            <span>LinkedIn Link</span>
          </label>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </StyledWrapper>

      {}
      <div className="cards">
        <div>
          {cards.map((card, index) => (
            <Card
              key={index}
              userIcon={card.userIcon}
              userName={card.userName}
              description={card.description}
              socialLinks={card.socialLinks}
            />
          ))}
        </div>
      </div>
    </>
  );
};
const StyledWrapper = styled.div`
  .card {
    margin-top: 10px;
    height: 30%;
    display: flex;
    justify-content: center;
  }
  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px; /* This sets the maximum width for the form */
    padding: 40px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before,
  .title::after {
    width: 18px;
    height: 18px;
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .title::after {
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 95%;
    padding: 20px 5px 5px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    margin-top: 10px;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
    background-color: #00bfff;
    width: 100%;
    max-width: 350px;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Form;
