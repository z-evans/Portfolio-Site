import styled from "@emotion/styled";

export const ExperienceSection = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 4em 2em;
  }
`;

export const AchievementCards = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
  > div {
    background: var(--cambridge-blue);
    color: var(--main-bg);
    display: flex;
    height: 250px;
    align-items: flex-end;
    max-width: 350px;
    width: 100%;
    margin-bottom: 25px;
    position: relative;
    img {
      position: absolute;
      bottom: 0;
      right: -10px;
      width: 240px;
      background-blend-mode: screen;
    }
    div {
      background: rgba(164, 195, 178, 0.7);
      z-index: 2;
      width: 100%;
      > * {
        margin: 10px;
      }
    }
  }

  @media only screen and (max-width: 1360px) {
    max-width: 716px;
    margin: auto;
  }

  @media only screen and (max-width: 796px) {
    max-width: unset;
    width: 100%;
    justify-content: center;
  }
`;

export const ExperienceCards = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;

  > div {
    background: var(--light-mint-cream);
    padding: 1em;
    max-width: 501px;
    h3 {
      margin: 0;
    }
  }

  @media only screen and (max-width: 1360px) {
    justify-content: center;
    > div {
      max-width: 400px;
    }
  }
`;
