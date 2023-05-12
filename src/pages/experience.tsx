import { FunctionComponent } from "react";
import content from "../data/content";
import {
  AchievementCards,
  ExperienceCards,
  ExperienceSection,
} from "../styles/pages/experience";

interface AchievementProps {
  name: string;
  description: string;
  src: string;
}

const AchievementItem: FunctionComponent<AchievementProps> = ({
  name,
  description,
  src,
}) => {
  return (
    <div key={name}>
      <img src={src} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

interface EducationProps {
  name: string;
  location: string;
  date: string;
  description: string;
  list: string[];
}

const EducationItem: FunctionComponent<EducationProps> = ({
  name,
  location,
  date,
  description,
  list,
}) => {
  return (
    <div key={`${name}`}>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{date}</p>
      <p>{description}</p>
      <ul>
        {list.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

function ExperiencePage() {
  return (
    <ExperienceSection>
      <section>
        <div>
          <h2>My Achievements</h2>
          <AchievementCards>
            {content.pages.expierence.achievements.map(AchievementItem)}
          </AchievementCards>
        </div>
      </section>

      <section>
        <div>
          <h2>My Education</h2>
          <ExperienceCards>
            {content.pages.expierence.education.map(EducationItem)}
          </ExperienceCards>
        </div>
      </section>
    </ExperienceSection>
  );
}

export default ExperiencePage;
