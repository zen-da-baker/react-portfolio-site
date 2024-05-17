// Import React
import React, { useState } from 'react';

// Import Articles
import Janissaries from './articles/Janissaries';

export default function Reader() {

    const [article, setArticle] = useState('janissaries');

    if (article === 'janissaries') {
        return <Janissaries />
    }

}
