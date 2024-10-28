// Import React
import React from 'react';

// Import components
import Card from './Card';

// Import database
import data from '../database/cardData';

export default function Programming() {

    return (
        <div className='app-body'>
            <h1 className='center heading'>Programming</h1>

            <h2 className='center'>Web Applications</h2>

            <div className='gallery'>
                <Card 
                    title={data.programming.program9.title}
                    description={data.programming.program9.description}
                    href={data.programming.program9.href}
                    src={data.programming.program9.src}
                    alt={data.programming.program9.alt}
                />

                <Card 
                    title={data.programming.program8.title} 
                    description={data.programming.program8.description}
                    href={data.programming.program8.href}
                    src={data.programming.program8.src}
                    alt={data.programming.program8.alt}
                />

                <Card 
                    title={data.programming.program7.title} 
                    description={data.programming.program7.description}
                    href={data.programming.program7.href}
                    src={data.programming.program7.src}
                    alt={data.programming.program7.alt}
                />

                <Card 
                    title={data.programming.program6.title}
                    description={data.programming.program6.description}
                    href={data.programming.program6.href}
                    src={data.programming.program6.src}
                    alt={data.programming.program6.alt}
                />

                <Card 
                    title={data.programming.program5.title}
                    description={data.programming.program5.description}
                    href={data.programming.program5.href}
                    src={data.programming.program5.src}
                    alt={data.programming.program5.alt}
                />

                <Card 
                    title={data.programming.program4.title}
                    description={data.programming.program4.description}
                    href={data.programming.program4.href}
                    src={data.programming.program4.src}
                    alt={data.programming.program4.alt}
                />

                <Card 
                    title={data.programming.program3.title}
                    description={data.programming.program3.description}
                    href={data.programming.program3.href}
                    src={data.programming.program3.src}
                    alt={data.programming.program3.alt}
                />

                <Card 
                    title={data.programming.program2.title}
                    description={data.programming.program2.description}
                    href={data.programming.program2.href}
                    src={data.programming.program2.src}
                    alt={data.programming.program2.alt}
                />

                <Card 
                    title={data.programming.program1.title}
                    description={data.programming.program1.description}
                    src={data.programming.program1.src}
                    alt={data.programming.program1.alt}
                />
            </div>
        </div>
    )
}