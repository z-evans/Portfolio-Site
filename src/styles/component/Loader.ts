import styled from "@emotion/styled";

export const LoadSpinner = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  text-align: center;

  svg {
    width: 4em;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--wintergreen-dream);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;
