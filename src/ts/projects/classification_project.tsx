import SentimentAnalysisCard from '../../assets/sentiment_analysis_card.png';
import SpamClassificationCard from '../../assets/spam_classification_card.png';
import DataAnalyticsCard from '../../assets/data_analytics_card.png';


function ClassificationProject({ }: {}) {
    return (
        <div className="classification-project">
            <div className="text-container">
                <h1>Classification Project</h1>
                <p>Lorem Ipsum sit amet, consectetur adipiscing elit</p>
            </div>

            <div className="cards-container">
                <Card title='Spam Identification' description='Loriem ipsum sip amet' image={SpamClassificationCard} size='small' />
                <Card title='Data Analytics' description='Loriem ipsum sip amet' image={DataAnalyticsCard} size='big' />
                <Card title='Sentiment Analysis' description='Loriem ipsum sip amet' image={SentimentAnalysisCard} size='small' />

            </div>

        </div>
    )
}


export default ClassificationProject;


function Card({ title, image, description, size }: { title: string, image: string, description: string, size: string }) {
    return (
        <div className={`${size}-card`}>
            <h4 className="title">{title}</h4>
            <p>{description}</p>
            <div className="image">
                <img src={image} />
            </div>
        </div>
    )
}