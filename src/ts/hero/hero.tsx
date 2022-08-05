import ImageSection from "./image_section"
import InfoSection from "./info_section"

function Hero({ bio }: { bio: string }) {
    return (
        <section className="hero scroll-section">
            <InfoSection bio={bio} />
            <ImageSection />
        </section>

    )
}

export default Hero