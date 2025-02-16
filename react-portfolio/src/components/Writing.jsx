// Import React
import React from 'react';

// Import Card component
import ArticleCard from './ArticleCard';

// Import database
import data from '../database/cardData';

export default function Writing(props) {
    return (
        <div className='app-body'>
            <h1 className='center heading'>Writing</h1>

            <h2 className='center'>Articles</h2>

            <div className='gallery'>
                <ArticleCard 
                    title={data.writing.article1.title}
                    description={data.writing.article1.description}
                    
                    handler={props.handleNativeAmericanResistance}
                />

                <ArticleCard
                    title={data.writing.article2.title}
                    description={data.writing.article2.description}
                    
                    src={data.writing.article2.src}
                    alt={data.writing.article2.alt}

                    handler={props.handleImperialRussia}
                />

                <ArticleCard 
                    title={data.writing.article3.title}
                    description={data.writing.article3.description}
                    
                    handler={props.handleReview}
                />

                <ArticleCard
                    title={data.writing.article4.title}
                    description={data.writing.article4.description}
                    
                    src={data.writing.article4.src}
                    alt={data.writing.article4.alt}

                    handler={props.handleVietnam}
                />

                <ArticleCard
                    title={data.writing.article5.title}
                    description={data.writing.article5.description}
                    
                    src={data.writing.article5.src}
                    alt={data.writing.article5.alt}

                    handler={props.handleJanissaries}
                />
            </div>
        </div>
    )
}