import { SKILLS } from "../constants";

export const Skills = () => {
  return (
    <div id="skills" className="flex-col section">
      <h2>SKILLS</h2>
      <div className="flex-row flex-wrap space-around">
        {Object.entries(SKILLS).map(([skill_name, skill_array]) => {
          return (
            <div className="flex-col skill-col" key={skill_name}>
              <h3>{skill_name}</h3>
              <p>{skill_array.join(", ")}, and more</p>
            </div>
          );
        })}

        {/* <div className="flex-col skill-col">
          <h3>Web Developer</h3>
          <p>
            HTML, CSS, JS, React, Vue, NextJS, Svelte, SvelteKit, Redux,
            Bitbucket, Fauna, Flask, Django, Gitpod, and more
          </p>
        </div>

        <div className="flex-col skill-col">
          <h3>Data Engineer</h3>
          <p>
            Python, SQL, NoSQL, Big Data, Data Cleaning, Data Modelling, Data
            Scraping, Feature Engineering, matplotlib
          </p>
        </div>

        <div className="flex-col skill-col">
          <h3>AI Engineer</h3>
          <p>SKlearn, Tensorflow, OpenCV, Vertex AI</p>
        </div>

        <div className="flex-col skill-col">
          <h3>More skills</h3>
          <p>Agile, Linux, Java, Cloudflare, JWT, Celery, Redis, VirtualBox</p>
        </div> */}
      </div>
    </div>
  );
};
