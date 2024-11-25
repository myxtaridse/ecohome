import React, { useState } from 'react';

interface CartPopupType {
  setIsMore: (isMore: boolean) => void;
}

const CartPopup: React.FC<CartPopupType> = ({ setIsMore }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const diff = e.touches[0].clientY - startY;
      setCurrentY(diff > 0 ? diff : 0); // Ограничиваем только вниз
    }
  };

  const handleTouchEnd = () => {
    if (currentY > 100) {
      // Если пользователь потянул вниз достаточно, закрываем блок
      setIsMore(false);
    }
    setCurrentY(0);
    setIsDragging(false);
  };

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
        style={{
          transform: `translateY(${currentY}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <p>Добавить в избранное</p>
        <p>Добавить в сравнение</p>
        <p>Удалить из корзины</p>
      </div>
    </div>
  );
};

export default CartPopup;
