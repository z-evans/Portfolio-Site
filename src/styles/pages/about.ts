import styled from "@emotion/styled";

export const AboutSection = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 4em 2em;
  }
`;

export const AboutCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    max-width: 120px;
    padding: 1em;
    img {
      width: 100%;
    }
    p {
      padding: 0.5em;
      text-align: center;
    }
  }
`;
