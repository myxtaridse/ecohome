import React from 'react';
// import image from '../../assets/image.png';

interface GoodSectionGalleryType {
  gallery: string[]
}

const GoodSectionGallery: React.FC<GoodSectionGalleryType> = ({gallery}) => {
  const [nowImage, setNowImage] = React.useState(0);
  const [startTouch, setStartTouch] = React.useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const startTouchFn = (e: any) => {
    if (e) {
      setStartTouch(e.touches[0].clientX)
    }
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const endTouchFn = (e: any) => {
    if (startTouch) {
      const endTouch = e.changedTouches[0].clientX;
      const swipeDistance = endTouch - startTouch

      if (swipeDistance > 50) {
        setNowImage((prev) => Math.max(0, prev - 1))
      } else if (swipeDistance < -50) {
        setNowImage((prev) => Math.min(gallery.length - 1, prev + 1))
      }
      setStartTouch(0)
    }
  }
  
  console.log(gallery);
  
  

  return (
    <div className='goodSection-gallery-block'
    style={{ transform: `translateX(${237.5 - 95 * nowImage}vw)`}}

    onTouchStart={(e) => startTouchFn(e)}
    onTouchEnd={(e) => endTouchFn(e)}
    >
      {
        gallery.map((image, id) => (
          <div key={id} className='goodSection-gallery' style={{
            backgroundImage: `url(${image})`
          }}
          >
              <img src={image} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default GoodSectionGallery

