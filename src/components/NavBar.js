import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Atag = links.map((e, i)=>{
    return (
      <a key={i} href={e}>{e}</a>
    )
  })

  return <nav>
    {/* display an <a> tag for each link here */}
    {Atag}
    </nav>;
}

export default NavBar;
