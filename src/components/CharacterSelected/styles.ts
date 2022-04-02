import styled from "styled-components";

export const CharacterSelect = styled.section`
  background-image: linear-gradient(
    90deg,
    rgba(64, 82, 117, 0) 0,
    rgba(64, 82, 117, 0.8) 25%,
    rgba(64, 82, 117, 0.8) 75%,
    rgba(64, 82, 117, 0)
  );
  background-size: auto 60%;
  background-repeat: no-repeat;
  background-position: center;

  .selected {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1100px;
  }
  .SelectedText {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: middle;
    color: #fff;
    font-weight: 400;
    text-align: center;
    h2 {
      font-style: italic;
      font-size: 2rem;
      margin: 0.5rem;
    }
    h3 {
      font-size: 1rem;
      margin: 0.5rem;
      font-weight: 400;
    }
  }
`;

interface props {
  BannerPose: any;
}

export const BannerImg = styled.div<props>`
  position: relative;
  max-width: 50%;
  width: 490px;
  padding-top: 40%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 100%;
  display: inline-block;
  background-image: url(${(props) => props.BannerPose});
`;

export const Banner = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");

  .banner {
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    padding: 2rem 0;
  }
  h1 {
    font-family: "Oswald", sans-serif;
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: #4b535d;
    font-style: italic;
    margin: 0.8rem 0;
  }
  span {
    font-size: 1.4rem;
    color: #212529;
    font-weight: 400;
    font-style: roboto;
  }
`;
