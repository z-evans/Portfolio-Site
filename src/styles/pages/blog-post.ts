import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const BlogPostSection = styled.div`
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  > div > div.head > img {
    width: 100%;
    margin-top: 1em;
  }
  > div > div > p.date {
    color: var(--cambridge-blue);
    margin-bottom: 0;
  }
  > div > div {
    background: var(--light-mint-cream);
    padding: 1em 1em;
    border-radius: 1em;
    margin-bottom: 1em;
  }
  > div > div.head {
    padding-top: 0;
  }
  > div > .content {
    white-space: pre-wrap;
    h2 {
      margin-bottom: 0;
      margin-top: 0;
    }
    h3 {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  margin-bottom: 0;
  margin-top: 0;
  padding-top: 0.5em;
`;

export const GoBack = styled(Link)`
  color: var(--wintergreen-dream) !important;
  margin-bottom: 1em;
  display: block;
  width: 70px;
`;
