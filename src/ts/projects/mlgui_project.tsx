import GithubLogo from '../../assets/git_logo.png';
import VsCodeLogo from '../../assets/vscode_logo.png';
import LaptopGUI from '../../assets/laptop_gui.png';

function MlGuiProject({ }) {
    return (
        <div className='two-column-project'>
            <div className='info-section'>
                <h2>Machine Learning GUI</h2>
                <p>Loriem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className='links-container'>
                    <img src={GithubLogo}></img>
                    <img src={VsCodeLogo}></img>
                </div>
            </div>
            <div className='mlgui-graphic-section'>
                <img src={LaptopGUI} alt="laptop graphic" />
            </div>
        </div>
    )
}


export default MlGuiProject;