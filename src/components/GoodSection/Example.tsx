import React from 'react';
import image404 from '../../assets/images-site/404.png';

interface GoodSectionGalleryType {
  gallery: string[],  // массив картинок
  width: number        // ширина галереи (в процентах)
}

const GoodSectionGallery: React.FC<GoodSectionGalleryType> = ({gallery, width}) => {
  const [nowImage, setNowImage] = React.useState(0);  // Индекс текущей картинки
  const [startTouch, setStartTouch] = React.useState<number>(0);  // Стартовое положение для жестов

  // Обработка начала жеста (касание)
  const startTouchFn = (e: any) => {
    if (e) {
      setStartTouch(e.touches[0].clientX);  // Сохраняем стартовую позицию касания
    }
  }

  // Обработка окончания жеста (касание)
  const endTouchFn = (e: any) => {
    if (startTouch) {
      const endTouch = e.changedTouches[0].clientX;  // Позиция окончания жеста
      const swipeDistance = endTouch - startTouch;  // Вычисляем расстояние жеста

      if (Math.abs(swipeDistance) > 30) {  // Если расстояние больше 30px, сдвигаем
        if (swipeDistance > 0) {  // Если свайп влево
          setNowImage(prev => Math.max(0, prev - 1));  // Сдвигаем на картинку влево
        } else {  // Если свайп вправо
          setNowImage(prev => Math.min(gallery.length - 1, prev + 1));  // Сдвигаем на картинку вправо
        }
      }
      setStartTouch(0);  // Обнуляем стартовое значение для следующего жеста
    }
  }

  return (
    <div 
      className='goodSection-gallery-block'
      style={{ 
        width: `${width}vw`,  // Устанавливаем ширину галереи по пропсу
        transform: `translateX(${-(width * nowImage)}vw)`,  // Сдвигаем содержимое в зависимости от текущей картинки
        display: 'flex',  // Используем flex для размещения элементов по горизонтали
        transition: 'transform 0.3s ease',  // Плавное переключение картинок
      }}
      onTouchStart={startTouchFn}
      onTouchEnd={endTouchFn}
    >
      {
        gallery.map((image, id) => (
          <div 
            key={id} 
            className='goodSection-gallery' 
            style={{
              backgroundImage: `url(${image ? image : image404})`,  // Устанавливаем картинку как фон
            }}
          >
            <img src={image ? image : image404} alt="" />  {/* Отображаем картинку */}
          </div>
        ))
      }
    </div>
  );
}

export default GoodSectionGallery;
