import TranslationPanel from '../../assets/translation_panel.png';
import VsCodeLogo from '../../assets/vscode_logo.png';
import GithubLogo from '../../assets/git_logo.png';
function NmtProject() {
    return (
        <div className="two-column-project">
            <div className="info-section">
                <h2>Neural Machine Translation</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat et et leo pulvinar platea. At id laoreet sodales lacus dolor porta a scelerisque. Tortor diam non.</p>
                <div className="links-container">
                    <img src={GithubLogo}></img>
                    <img src={VsCodeLogo}></img>
                </div>
            </div>
            <div className='graphic-section'>
                <img src={TranslationPanel} />
            </div>
        </div>
    )
}

export default NmtProject;