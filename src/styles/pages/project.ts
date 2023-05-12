import styled from "@emotion/styled";

export const ProjectSection = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 4em 2em;
  }
`;

export const ProjectCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3 ease;
  > a {
    > div {
      display: flex;
      text-align: center;
      position: relative;
      padding: 20px 0;
      margin: 100px auto;
      text-align: left;
      align-items: center;

      > div {
        background: var(--mint-cream);
        z-index: 1;
        max-width: 400px;
        align-items: center;
        padding: 1em;
        transition: 0.2s ease-in-out;
        h3 {
          font-size: 42px;
          margin: 0;
          margin-bottom: 10px;
          color: var(--main-text);
        }
        p {
          margin-top: 0;
          color: var(--main-text);
        }
        > div {
          margin: 0 -1em;
          img {
            width: 2em;
            margin: 0 1em;
          }
        }
      }
      > img {
        z-index: 1;
        width: 400px;
        margin-left: 50px;
      }

      :before {
        content: " ";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        max-width: 400px;
        height: 300px;
        margin: auto;
        border: 5px solid var(--wintergreen-dream);
        z-index: 0;
        transition: 0.3s ease;
      }
      :hover::before {
        max-width: 500px;
        height: 350px;
      }

      :hover > div {
        background: var(--light-cyan);
      }
    }
  }

  @media only screen and (max-width: 800px) {
    > a {
      margin-bottom: 2em;
      transition: 0.3s ease;
      > div {
        margin: unset;
        padding: unset;
        padding-bottom: 1em;
        flex-direction: column;
        h3 {
          text-align: left;
        }
        > img {
          margin: 0;
        }

        :before {
          display: none;
        }
      }

      :hover {
        background: var(--light-cyan);
      }
    }
  }
`;
