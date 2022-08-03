import React, { useState } from "react";
import Project from "./project";
import SidebarBlock from "./sidebar_block";

function Projects({ children, sidebarThumbnails }: { children: JSX.Element[], sidebarThumbnails: React.ReactNode[] }) {
    const [activeProject, setActiveProject] = useState(1);

    const wrappedChildren = children.map((child, index) =>
        <Project active={(activeProject == index) ? 'active' : (activeProject < index) ? 'after' : 'before'}>
            {child}
        </Project>
    )

    const sidebarBlocks = children.map((_, index) =>
        <SidebarBlock image={sidebarThumbnails[index]} onClick={() => setActiveProject(index)} active={(activeProject == index)} />)

    return (
        <div className="projects">
            <div className="sidebar">
                <div className="blocks-container">
                    {sidebarBlocks}
                </div>
            </div>
            <div className="body">
                <div className="projects-panel">
                    {wrappedChildren}
                </div>
                <div style={{ height: '150vh', }}></div>
            </div>
        </div>
    )

}


export default Projects