// Import data from the projects file
import { projectData } from './api/projects_data';

export default function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
      {/* Iterate over the projectData array and render each project */}
        {projectData && projectData.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-header">
            {/* Display a folder icon */}
              <i className="fa-regular fa-folder-open folder-icon"></i>
              <div className="small-icons">
              {/* Display a GitHub icon and link to the project's GitHub repository */}
                <a href={project.gitHubRepo}><i className="fa-brands fa-github"></i></a>
              </div>
            </div>
            {/* Display the project's title and description */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}
