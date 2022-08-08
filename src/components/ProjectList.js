import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  let Projectitems = projects.map((e, i)=>{
    return (
      <ProjectItem name={e.name} about={e.about} technologies={e.technologies} key={i} />
    )
  })
  console.log(Projectitems)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {Projectitems}
      </div>
    </div>
  );
}

export default ProjectList;
