import React from "react";
import Card from "./card";
import styled from "styled-components";
function CardList({ cards }) {
  return (
    <>
      <StyledWrapper>
        <div className="CardList">
          {cards.map((card, index) => (
            <div key={index}>
              <Card
                userIcon={card.userIcon}
                userName={card.userName}
                description={card.description}
                socialLinks={card.socialLinks}
              />
            </div>
          ))}
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  .CardList {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export default CardList;
