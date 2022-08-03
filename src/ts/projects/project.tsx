function Project({ children, active }: { children: React.ReactNode | React.ReactNode[], active: string }) {
    return (
        <div className={`project-wrapper ${active}`}>
            {children}
        </div>
    )
}


export default Project;