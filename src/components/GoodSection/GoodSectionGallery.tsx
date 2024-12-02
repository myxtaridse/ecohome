import React from 'react';
import image404 from '../../assets/images-site/404.png';

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
            backgroundImage: `url(${image ? image : image404})`
          }}
          >
              <img src={image ? image : image404} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default GoodSectionGallery



// https://s402vla.storage.yandex.net/rdisk/d68e24b995d463470b410c9cef6a9c1eb6e7db2f23edf1508b53ee07076c5233/674dc5d7/FY5Rs_A0VxypX9DJXYpf4AHj3nBrYWEAYwdFF9822Ay9t-WoMarMYSVduRzMRJYCFR_GlyvuCVyn0qXlOLKdKQ==?uid=1602084553&filename=image.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1602084553&fsize=112040&hid=a231f803501887ccfdd0a8e4ebe0be9b&media_type=image&tknv=v2&etag=053d45ba94e51df2ef8897e033126343&ts=6284a780be3c0&s=1bb76311878c14afe872a425766b97a30f3812e6ea5eef52b7189c684dd871a9&pb=U2FsdGVkX1_xQpvzxikMF3EQrStzjjielomBc70jGp5FgG4pdUUSQGs1v7aXocjonPmWEH3UkQ0p9fv91cw-mcHCddjiuilKBQzH9acuqLA