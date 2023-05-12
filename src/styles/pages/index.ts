import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Front = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--light-mint-cream);
  height: 100%;
  h1 {
    font-size: 92px;
    margin: 0;
  }
  h2 {
    font-weight: lighter;
    margin: 0;
    margin-bottom: 0.75em;
  }
  div {
    display: flex;
    gap: 1em;
  }

  @media only screen and (max-width: 1400px) {
    padding: 0 2em;
  }
`;

export const Button = styled(Link)`
  border: 2px solid var(--cambridge-blue);
  color: var(--cambridge-blue) !important;
  padding: 1em;
  min-width: 100px;
  text-align: center;
  border-radius: 0.5em;
  transition: 0.1s ease;
  :hover {
    background: var(--cambridge-blue);
    color: var(--light-mint-cream) !important;
  }
`;
