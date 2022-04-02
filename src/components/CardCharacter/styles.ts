import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;

  max-width: 1400px;
  margin: 0 auto;
`;

interface props {
  BoxBackground: any;
}

export const BoxCharacter = styled.div<props>`
  min-width: 100px;
  .iconImg {
    height: 98px;
    border-radius: 0.25rem;
    border: 2px solid white;

    background-color: var(--black);
    background-image: url(${(props) => props.BoxBackground});
    background-size: auto 100%;

    transform: skewX(-3deg);
    transition: 0.1s;

    :hover {
      cursor: pointer;
      transform: scale(1.25) skewX(-3deg);
      background-color: var(--selected);
      z-index: 1;
      + .iconName {
        background-color: #f6f6f6;
        position: relative;
      }
    }
  }

  .iconName {
    text-align: center;
    padding: 0;
    margin: 0.25rem;
    border-radius: 0.25rem;
    transition: 0.3s;
    span {
      font-size: 0.8rem;
      font-weight: bold;
      color: var(--black);
    }
  }
`;
