import styled from "@emotion/styled";

export const BlogSection = styled.div`
  padding: 4em 2em;
`;

export const Title = styled.h2`
  display: flex;
`;

export const PSNotice = styled.span`
  font-size: 0.4em;
  margin-left: 1em;
`;

export const BlogCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  > a {
    max-width: 328px;
    width: 100%;
    img {
      width: 100%;
    }
    > div > div {
      padding: 1em;
      background: var(--light-mint-cream);
      h3 {
        margin: 0;
        margin-bottom: 0.5em;
        color: var(--wintergreen-dream);
      }
      .date {
        display: block;
        color: var(--light-cyan);
        text-align: right;
      }
    }
  }

  @media only screen and (max-width: 1340px) {
    max-width: 756px;
    margin: auto;
    > a {
      max-width: 370px;
    }
  }

  @media only screen and (max-width: 760px) {
    max-width: 100%;
    margin: auto;
    > a {
      max-width: 90%;
      margin: auto;
    }
  }
`;
