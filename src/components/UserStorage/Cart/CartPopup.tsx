import React from 'react';

interface CartPopupType {
  setIsMore: (isMore: boolean) => void;
  isMore: boolean;
}

const CartPopup: React.FC<CartPopupType> = ({ setIsMore, isMore }) => {
  const [startTouch, setStartTouch] = React.useState<number | null>(null);
  const [translateY, setTranslateY] = React.useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartTouch(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startTouch === null) return;

    const currentTouch = e.touches[0].clientY;
    const deltaY = currentTouch - startTouch;

    // Ограничиваем движение вверх и незначительное движение вниз
    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    // Порог для закрытия окна
    if (translateY > 150) {
      setIsMore(false);
    }

    // Возвращаем окно в исходное положение, если порог не достигнут
    setTranslateY(0);
    setStartTouch(null);
  };

  React.useEffect(() => {
    if (isMore) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }, [isMore]);

  return (
    <div
      className="cartPopup-bg"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLElement).className === 'cartPopup-bg') {
          setIsMore(false);
        }
      }}
    >
      <div
        className="cartPopup"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateY(${translateY}px)`,
          transition: translateY === 0 ? 'transform 0.3s ease' : 'none',
        }}
      >
        <div className="cartPopup-close" onClick={() => setIsMore(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z" />
          </svg>
        </div>
        <div className="cartPopup-item">
          <p>Добавить в избранное</p>
        </div>
        <div className="cartPopup-item">
          <p>Добавить в сравнение</p>
        </div>
        <div className="cartPopup-item">
          <p>Удалить из корзины</p>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
