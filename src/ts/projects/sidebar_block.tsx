import { ReactNode } from "react";
import bertThumbnail from "../../assets/bert_thumbnail.png"

function SidebarBlock({ image, active, onClick }: { image: any; active: boolean, onClick: () => void }) {
    return (
        <div className={`sidebar-animation-wrapper ${active && 'active-block'}`}>
            <div className='sidebar-block' onClick={onClick}>
                {/* <img src={image} alt="bert-thumbnail" /> */}
            </div>
        </div>
    )
}

export default SidebarBlock;