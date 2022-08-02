import ImageSection from "../image_section"
import InfoSection from "./info_section"

function Hero({ bio }: { bio: string }) {
    return (
        <div className="hero">
            <InfoSection bio={bio} />
            <ImageSection />
        </div>

    )
}

export default Hero