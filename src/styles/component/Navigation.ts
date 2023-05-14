import styled from "@emotion/styled";
import { Link, LinkProps } from "react-router-dom";
import content from "../../data/content";

type IsHome = {
  isHome: boolean;
};

export const BasicPageLayout = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: row;
  gap: ${(props: IsHome) => (props.isHome ? `unset` : "1em")};
  > div.content {
    width: 100%;
    max-height: 100vh;
    overflow: auto;
    background: ${(props: IsHome) =>
      props.isHome ? `url(${content.images.background})` : "unset"};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    > div {
      height: ${(props: IsHome) => (props.isHome ? `100%` : "unset")};
      max-width: 1082px;
      margin: 0 auto;
      padding-top: ${(props: IsHome) => (props.isHome ? `unset` : "5%")};
    }
  }
`;

export const SafeGuard = styled.div`
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ toggle }: Toggle) => (toggle ? `100vw` : "0")};
  height: 100%;
  z-index: 50;

  @media only screen and (min-width: 1000px) {
    visibility: hidden;
  }
`;

export const BurgerMenu = styled.div`
  background: var(--wintergreen-dream);
  position: fixed;
  left: 1em;
  top: 1em;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;

  @media only screen and (min-width: 1000px) {
    visibility: hidden;
  }
`;

type Toggle = {
  toggle: boolean;
};

export const Nav = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  background: var(--wintergreen-dream);
  width: 300px;
  transition: 0.3s ease;
  z-index: 100;
  ul {
    list-style: none;
    padding-left: unset;
    margin: 1em;
  }

  @media only screen and (max-width: 1000px) {
    position: absolute;
    height: 100%;
    width: 250px;
    left: ${({ toggle }: Toggle) => (toggle ? `0px` : "-250px")};
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
`;

export const NavItem = styled(Link)`
  padding: 1em;
  border: 2px solid var(--cambridge-blue);
  border-radius: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(
    ${(props: LinkProps) =>
      props.to === location.pathname ? "--wintergreen-dream" : "--mint-cream"}
  ) !important;
  background: ${(props: LinkProps) =>
    props.to === location.pathname ? "var(--mint-cream)" : "unset"};
  transition: 0.1s ease;
  :hover {
    background: var(--mint-cream);
    color: var(--wintergreen-dream) !important;
  }
`;

export const NavIcon = styled.div`
  font-size: 24px;
  width: 30px;
  text-align: center;
  margin-right: 0.5em;
`;
