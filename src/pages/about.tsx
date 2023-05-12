import { FunctionComponent } from "react";
import content from "../data/content";
import { AboutCards, AboutSection } from "../styles/pages/about";

interface TechItemProps {
  name: string;
  src: string;
}
const TechItem: FunctionComponent<TechItemProps> = ({ name, src }) => {
  return (
    <div key={name}>
      <img src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
};

function AboutPage() {
  return (
    <AboutSection>
      <div>
        <h2>About Me</h2>
        <p>
          Hi, I'm Zack Evans, a developer from Wales. I'm passionate about
          building web applications that make people's lives easier. I'm also a
          big fan of open source software and I'm always looking for new ways to
          use it to solve problems.
        </p>
        <p>
          I started learning to code when I was 16 years old. I was always
          interested in computers and I wanted to learn how to make them do
          things. I started by learning HTML and CSS, and then I moved on to
          JavaScript and PHP.
        </p>
        <p>
          In 2018, I won a gold award in web development at the Inspiring Skills
          Wales competition. This gave me the confidence to pursue a career in
          development. I started an apprenticeship at Inngot, as a Junior
          Developer. I'm now in my final year of the apprenticeship and I'm
          really enjoying it.
        </p>
        <p>If you're interested in working with me, please get in touch.</p>
      </div>
      <section>
        <div>
          <h2>Technologies</h2>
          <p>Here is a list of technologies I used when developing:</p>

          <AboutCards>{content.pages.about.tech.map(TechItem)}</AboutCards>
        </div>
      </section>
    </AboutSection>
  );
}

export default AboutPage;
