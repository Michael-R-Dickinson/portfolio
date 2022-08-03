import BertProject from "./bert-project"

function Projects({ children }: { children: React.ReactNode }) {
    return (
        <div className="projects">
            <div className="sidebar">
                <div className="blocks-container">
                    <div className="sidebar-block"></div>
                    <div className="sidebar-block"></div>
                    <div className="sidebar-block"></div>
                    <div className="sidebar-block"></div>
                </div>
            </div>
            <div className="body">
                <div className="projects-panel">
                    <BertProject />
                </div>
                <div style={{ height: '150vh' }}></div>
            </div>
        </div>
    )


    // return (
    //     <div className="projects-container">
    //         {children}
    //     </div>
    // )
}


export default Projects