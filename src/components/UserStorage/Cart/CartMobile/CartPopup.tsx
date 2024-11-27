import React from 'react';

interface CartPopupType {
  setIsMore: (isMore: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const CartPopup: React.FC<CartPopupType> = ({ setIsMore, children }) => {
  
    const [isTouch, setIsTouch] = React.useState(false)
    const [startTouch, setStartTouch] = React.useState<number>(0)
    const [currentTouch, setCurrentTouch] = React.useState<number>(0)


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const touchStartFn = (e: any) => {
      setStartTouch(e.touches[0].clientY)
      setIsTouch(false)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const touchMoveFn = (e: any) => {
      if (!startTouch) return;

      const currentY = e.touches[0].clientY;
      const deltaY = currentY - startTouch;
      if (Math.abs(deltaY) < 5) return;
      setIsTouch(true)
      if (deltaY > 0) {
        setCurrentTouch(deltaY)
      }
    }
    
    const touchEndFn = () => {
      if (!isTouch) {
        setStartTouch(0);
        return;
      }
      if (currentTouch > 150) {
        setIsMore(false)
      }

      setCurrentTouch(0)
      setStartTouch(0)
    }

    


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
        onTouchStart={(e) => touchStartFn(e)}
        onTouchMove={(e) => touchMoveFn(e)}
        onTouchEnd={touchEndFn}

        style={{transform: `translateY(${currentTouch}px)`,
        transition: isTouch ? 'none' : 'transform 0.3s ease'
      }}
      >
        <div className='cartPopup-close' onClick={() => setIsMore(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
        </div>

        <div className='cartPopup-content'>
          {
            children
          }
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
