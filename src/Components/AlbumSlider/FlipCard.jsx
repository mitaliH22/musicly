import React from 'react'
import { FlipCardContainer, Title } from "../Styled";

function FlipCard(props) {
  return (
    <FlipCardContainer>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.slide.img} alt="album" />
          {/* <img src={props.slide.img} alt="" width="100%" /> */}
        </div>
        <div className="flip-card-back">
          <Title align="center" color="Black">
            {props.slide.Title}
          </Title>
          <Title align="center" color="Black">
            {props.slide.id}
          </Title>
          <Title align="center" color="Black">
            {props.slide.songs}
          </Title>
        </div>
      </div>
    </FlipCardContainer>
  );
}

export default FlipCard