import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <div id="projects" class="flex-row section flex-wrap space-around">
      {PROJECTS.map(({ name, description, img, github, render }) => {
        return (
          <div class="card">
            <div class="card-img">
              <img alt="project" src={img} />
            </div>

            <div class="flex-col">
              <div class="flex-col card-content">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>

              <div class="card-footer">
                {github && (
                  <a target="_blank" href={github} rel="noreferrer">
                    Github
                  </a>
                )}
                {render && (
                  <a target="_blank" href={render} rel="noreferrer">
                    Render
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
