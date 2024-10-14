import React, { useState } from "react";
import styled from "styled-components";

function Form({ addCard }) {
  const [userIcon, setUserIcon] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [twitterLink, setTwitterLink] = useState("x.com");
  const [instagramLink, setInstagramLink] = useState("Instagram.com");
  const [linkedinLink, setLinkedinLink] = useState("Linkdin.com");
  const [error, setError] = useState("");

  const validateUrl = (url, platform) => {
    let regex;
    switch (platform) {
      case "twitter":
        regex =
          /^(https?:\/\/)?(www\.)?(twitter\.com\/[A-Za-z0-9_]{1,15}\/?|x\.com\/[A-Za-z0-9_]{1,15}\/?|twitter\.com\/[^\/]+\/status\/\d+\/?)$/;
        break;
      case "instagram":
        regex =
          /^(https?:\/\/)?(www\.)?(instagram\.com\/[A-Za-z0-9_.]{1,30}\/?)$/;
        break;
      case "linkedin":
        regex = /^(https?:\/\/)?(www\.)?(linkedin\.com\/in\/[A-Za-z0-9-]+\/?)$/;
        break;
      default:
        return false;
    }
    return regex.test(url);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !validateUrl(twitterLink, "twitter") ||
      !validateUrl(instagramLink, "instagram") ||
      !validateUrl(linkedinLink, "linkedin")
    ) {
      setError("Please enter valid Twitter, Instagram, and LinkedIn links.");
      return;
    } else {
      setError(""); // Clear the error message if all URLs are valid
    }

    const newCard = {
      userIcon,
      userName,
      description,
      twitterLink,
      instagramLink,
      linkedinLink,
    };

    addCard(newCard);

    // Clear form fields
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <span>Description</span>
          </label>

          <label>
            <input
              className="input"
              type="url"
              value={twitterLink}
              onChange={(e) => setTwitterLink(e.target.value)}
            />
            <span>Twitter Link</span>
          </label>
          <label>
            <input
              className="input"
              type="url"
              value={instagramLink}
              onChange={(e) => setInstagramLink(e.target.value)}
            />
            <span>Instagram Link</span>
          </label>
          <label>
            <input
              className="input"
              type="url"
              value={linkedinLink}
              onChange={(e) => setLinkedinLink(e.target.value)}
            />
            <span>LinkedIn Link</span>
          </label>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </StyledWrapper>
    </>
  );
}

export default Form;

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
