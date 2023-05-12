import urls from "../data/urls";
import { Front, Button } from "../styles/pages";

function IndexPage() {
  return (
    <>
      <Front>
        <h1>Zack Evans</h1>
        <h2>Web Developer</h2>
        <div>
          <Button to={urls.pages.about}>About Me</Button>
          <Button to={urls.pages.blog}>Blog</Button>
        </div>
      </Front>
    </>
  );
}

export default IndexPage;
