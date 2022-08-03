import googleBertLogo from '../../assets/google_bert_logo.png';
import searchIcon from '../../assets/search_icon.png';

function BertProject({ }) {
    return (
        <div className="project-wrapper">
            <div className="project">
                <div className='bert-container'>
                    <img src={googleBertLogo} alt="google-bert-logo" />
                </div>
                <div className="search-bar">
                    <img src={searchIcon} alt="search-icon" />
                    <p>BERT</p>
                </div>
                <div className="paper">
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat et et leo pulvinar platea. At id laoreet sodales lacus dolor porta a scelerisque. Tortor diam non.</p>
                </div>
            </div>
        </div>
    )
}

export default BertProject; 