import isoLaptop from '../../assets/iso-laptop-touchpadless.png';
import touchpad from '../../assets/touchpad.png';
import holoSidebarSmall from '../../assets/side-holo.png';
import holoPanelSmall from '../../assets/panel-holo-small.png';


function ImageSection({ }) {
    return (
        <div className="section-image">
            <div className="graphic-wrapper">
                <img src={isoLaptop} className="overlayed-image" alt="laptop" />
                <img src={touchpad} className="overlayed-image" alt="touch pad" id='touchpad' />
                <img src={holoPanelSmall} id='holo-panel' />
                <img src={holoSidebarSmall} id='holo-sidebar' />
            </div>
        </div>

    )
}

export default ImageSection