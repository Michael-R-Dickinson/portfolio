function InfoSection({ bio }: { bio: string }) {
    return (
        <div className="section-info">
            <div className="info-wrapper">
                <h1>Michael <br />Dickinson</h1>
                <div className="horizontal-line" />
                <p>{bio}</p>
            </div>
            <button>Projects</button>
        </div>


    )
}

export default InfoSection;