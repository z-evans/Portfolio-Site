import {
  IconDefinition,
  faBars,
  faBlog,
  faCogs,
  faEye,
  faHome,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { useLocation } from "react-router-dom";
import urls from "../../data/urls";
import {
  NavItem,
  NavIcon,
  BasicPageLayout,
  Nav,
  NavItems,
  BurgerMenu,
} from "../../styles/component/Navigation";

export interface NavigationItemProps {
  name: string;
  icon: IconDefinition;
  link: string;
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({
  name,
  icon,
  link,
}) => {
  return (
    <NavItem to={link} key={name}>
      <NavIcon>
        <FontAwesomeIcon icon={icon} />
      </NavIcon>
      {name}
    </NavItem>
  );
};

const Navigation: FunctionComponent<PropsWithChildren> = ({ children }) => {
  useLocation();

  const [toggle, setToggle] = useState(false);

  const items: NavigationItemProps[] = [
    { name: "Home", icon: faHome, link: urls.pages.home },
    { name: "About Me", icon: faCogs, link: urls.pages.about },
    { name: "Experience", icon: faTrophy, link: urls.pages.experience },
    { name: "Projects", icon: faEye, link: urls.pages.projects },
    { name: "Blog", icon: faBlog, link: urls.pages.blog },
  ];

  return (
    <>
      <BasicPageLayout isHome={location.pathname === urls.pages.home}>
        <BurgerMenu onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faBars} />
        </BurgerMenu>
        <Nav toggle={toggle}>
          <NavItems>{items.map(NavigationItem)}</NavItems>
        </Nav>
        <div className="content" onClick={() => setToggle(false)}>
          <div>{children}</div>
        </div>
      </BasicPageLayout>
    </>
  );
};

export default Navigation;
