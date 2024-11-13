import React from 'react'
import image1 from '../../../assets/image.png'
import image2 from '../../../assets/image-2.png'
import image3 from '../../../assets/image-3.png'

const imagesGallery = [
    {
        id: '1',
        image: image1
    },
    {
        id: '2',
        image: image2
    },
    {
        id: '3',
        image: image3
    },
    {
        id: '4',
        image: image1
    },
    {
        id: '5',
        image: image2
    },
    {
        id: '6',
        image: image3
    },
    {
        id: '7',
        image: image1
    },
    {
        id: '8',
        image: image2
    },
    {
        id: '9',
        image: image3
    },
    {
        id: '10',
        image: image1
    },
    {
        id: '11',
        image: image2
    },
    {
        id: '12',
        image: image3
    },
    {
        id: '13',
        image: image1
    },
    {
        id: '14',
        image: image2
    },
    {
        id: '15',
        image: image3
    },
    {
        id: '16',
        image: image1
    },
    {
        id: '17',
        image: image2
    },
    {
        id: '18',
        image: image3
    },
    {
        id: '19',
        image: image1
    },
    {
        id: '20',
        image: image2
    },
    {
        id: '21',
        image: image3
    },
    {
        id: '22',
        image: image1
    },
    
    
    
]

const GoodReviewsImgs = () => {
    const imagesRef = React.useRef<HTMLDivElement | null>(null);

    const onClickGallery = (str : string) => {
        if (imagesRef.current && typeof imagesRef.current.style.translate  === 'string') {
            const newRef = imagesRef.current.style.translate.slice(0, -2);
            const numberRef = Number(newRef)

            const newWidth = imagesRef.current.scrollWidth - imagesRef.current.clientWidth + 80;
            
            if (str === 'incr' && numberRef > -newWidth ) {
                // console.log(numberRef);
                
                imagesRef.current.style.translate = `${numberRef - 160}px`; // до -30%
               
                console.log(imagesRef);
            } else if (str === 'decr' && numberRef < 0) {
                // console.log(numberRef);

                imagesRef.current.style.translate = `${numberRef + 160}px`; // до 0%
                console.log(imagesRef);

            }
        }
    }
    

  return (
    <div className='goodItem-reviews-imagesBlock'>
        
<div className='goodItem-reviews-imagesBlock-arrow goodItem-reviews-imagesBlock-arrow-left' onClick={() => onClickGallery('decr')}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8284 12.0005L14.6569 14.8289L13.2426 16.2431L9 12.0005L13.2426 7.75781L14.6569 9.17203L11.8284 12.0005Z"></path></svg>
</div>
        <div ref={imagesRef} className='goodItem-reviews-imagesBlock-gallery' style={{translate: '0px'}}>
            {
                imagesGallery.map((itemImg) => <img src={itemImg.image} key={itemImg.id} />)
                
            }
        </div>
            <div className='goodItem-reviews-imagesBlock-arrow goodItem-reviews-imagesBlock-arrow-right' onClick={() => onClickGallery('incr')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.1717 12.0005L9.34326 9.17203L10.7575 7.75781L15.0001 12.0005L10.7575 16.2431L9.34326 14.8289L12.1717 12.0005Z"></path></svg>
            </div>
    </div>
  )
}

export default GoodReviewsImgs