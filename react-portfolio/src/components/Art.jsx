// Import React
import React from 'react';

// Import Card Component
import ArtCard from './ArtCard';

// Import Database
import data from '../database/cardData';

export default function Art() {
    return (
        <div className='app-body'>
            <h1 className='center heading'>Art</h1>

            <h2 className='center'>Art Projects</h2>

            <div className='gallery'>
                {/* Row 1 */}
                <ArtCard src={data.art.img1.src} alt={data.art.img1.alt} />
                <ArtCard src={data.art.img2.src} alt={data.art.img2.alt} />
                <ArtCard src={data.art.img3.src} alt={data.art.img3.alt} />

                {/* Row 2 */}
                <ArtCard src={data.art.img4.src} alt={data.art.img4.alt} />
                <ArtCard src={data.art.img5.src} alt={data.art.img5.alt} />
                <ArtCard src={data.art.img6.src} alt={data.art.img6.alt} />
                
                {/* Row 3 */}
                <ArtCard src={data.art.img7.src} alt={data.art.img7.alt} />
                <ArtCard src={data.art.img8.src} alt={data.art.img8.alt} />
                <ArtCard src={data.art.img9.src} alt={data.art.img9.alt} />

                {/* Row 4 */}
                <ArtCard src={data.art.img10.src} alt={data.art.img10.alt} />
                <ArtCard src={data.art.img11.src} alt={data.art.img11.alt} />
                <ArtCard src={data.art.img12.src} alt={data.art.img12.alt} />

                {/* Row 5 */}
                <ArtCard src={data.art.img13.src} alt={data.art.img13.alt} />
                <ArtCard src={data.art.img14.src} alt={data.art.img14.alt} />
                <ArtCard src={data.art.img15.src} alt={data.art.img15.alt} />

                {/* Row 6 */}
                <ArtCard src={data.art.img16.src} alt={data.art.img16.alt} />
                <ArtCard src={data.art.img17.src} alt={data.art.img17.alt} />
                <ArtCard src={data.art.img18.src} alt={data.art.img18.alt} />

                {/* Row 7 */}
                <ArtCard src={data.art.img19.src} alt={data.art.img19.alt} />
                <ArtCard src={data.art.img20.src} alt={data.art.img20.alt} />
                <ArtCard src={data.art.img21.src} alt={data.art.img21.alt} />
                
            </div>
        </div>
    )
}