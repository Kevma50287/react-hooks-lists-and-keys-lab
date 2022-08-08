import React from "react";

function ProjectItem({ name, about, technologies }) {
  let SpanTag = technologies.map((e, i)=>{
    return (
      <span key={i}>{e}</span>
    )
  })
  console.log(SpanTag)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {SpanTag}
      </div>
    </div>
  );
}

export default ProjectItem;
