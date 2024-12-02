import React from 'react';
// import image from '../../assets/image.png';

interface GoodSectionGalleryType {
  gallery: string[]
}

const GoodSectionGallery: React.FC<GoodSectionGalleryType> = ({gallery}) => {
  const [nowImage, setNowImage] = React.useState(0);
  const [startTouch, setStartTouch] = React.useState(0)
  // const [currentTouch, setCurrentTouch] = React.useState(0)

  
  console.log(nowImage);
  

  return (
    <div className='goodSection-gallery-block'
    style={{ transform: `translateX(${237.5 - 95 * nowImage}vw)`}}

    onTouchStart={(e) => setStartTouch(e.touches[0].clientX)
    }
    onTouchMove={(e) => {
      console.log(startTouch);
      
      if (e.touches[0].clientX > startTouch && nowImage !== gallery.length - 1) {
        setNowImage(prevIndex => prevIndex + 1)
      } else if (e.touches[0].clientX < startTouch && nowImage > 0) {
        setNowImage(prevIndex => prevIndex - 1)
      }
    }
    }
    onTouchEnd={() => {
      setStartTouch(0)
    }}
    >
      {
        gallery.map((image, id) => (
          <div key={Math.random()} className='goodSection-gallery' style={{
            backgroundImage: `url(${image})`
          }}
            onClick={() => console.log(id)
            }
          >
              <img src={image} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default GoodSectionGallery

