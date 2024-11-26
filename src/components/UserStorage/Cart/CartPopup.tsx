import React from 'react';

interface CartPopupType {
  setIsMore: (isMore: boolean) => void;
}

const CartPopup: React.FC<CartPopupType> = ({ setIsMore }) => {
  
    const [isTouch, setIsTouch] = React.useState(false)
    const [startTouch, setStartTouch] = React.useState(0)
    const [currentTouch, setCurrentTouch] = React.useState(0)

    const downStart = (e: React.TouchEvent) => {
        setIsTouch(true);
        setStartTouch(e.touches[0].clientY);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const downMove = (e: any) => {
        if (e && isTouch) {
            const currentY = e.touches[0].clientY - startTouch;
            // document.body.style.overflow = 'hidden'
            console.log(currentY);
            
            if (currentY > 0) {
              setCurrentTouch(currentY);
            } 
            
            
        }
    }

    const downEnd = () => {
        if (currentTouch > 150) {
            setIsMore(false);
            setIsTouch(false);
        }
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
        onTouchStart={(e) => downStart(e)}
        // onTouchMove={(e) => downMove(e)}
        onTouchMove={(e) => downMove(e)}
        onTouchEnd={downEnd}

        style={{transform: `translateY(${currentTouch}px)`}}
      >
        <div className='cartPopup-close' onClick={() => setIsMore(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
        </div>

        <div className='cartPopup-item'>
            <div>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.0703 7.92893C34.5077 10.3713 35.4239 13.7501 34.82 16.8947C35.7684 17.162 36.6639 17.667 37.4112 18.4088C39.751 20.7317 39.751 24.4978 37.4112 26.8207L28.3327 35.8333L23.296 30.8333L18.3325 35.8083L4.20165 21.655C0.69443 17.7283 0.825527 11.6984 4.59495 7.92893C8.36863 4.15525 14.408 4.02812 18.3344 7.54755C22.2494 4.03333 28.2993 4.15 32.0703 7.92893ZM21.6027 20.7743C20.576 21.7935 20.576 23.4358 21.6027 24.455L28.3327 31.1363L35.0627 24.455C36.0894 23.4358 36.0894 21.7935 35.0627 20.7743C34.0227 19.7418 32.3264 19.7418 31.2827 20.778L28.3292 23.701L25.9844 21.375L25.379 20.7743C24.339 19.7418 22.6427 19.7418 21.6027 20.7743ZM6.95197 10.286C4.46907 12.7689 4.34442 16.7455 6.63257 19.372L18.3325 31.0905L20.931 28.4867L19.2542 26.8207C16.9144 24.4978 16.9144 20.7317 19.2542 18.4088C21.594 16.086 25.3877 16.086 27.7275 18.4088L28.332 19.0085L28.9379 18.4088C29.6455 17.7063 30.4862 17.2162 31.3793 16.9387C32.072 14.6596 31.509 12.0854 29.711 10.2835C27.2125 7.7799 23.1787 7.67835 20.561 10.0281L18.3359 12.0254L16.1094 10.0297C13.4843 7.67662 9.45778 7.78013 6.95197 10.286Z" fill="#1E1E1E"/>
                </svg>
            </div>
            <p>Добавить в избранное</p>
        </div>
        <div className='cartPopup-item'>
            <div>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33398 20.0007H6.66732V35.0007H3.33398V20.0007ZM8.33398 23.334H11.6673V35.0007H8.33398V23.334ZM26.6673 13.334H30.0007V35.0007H26.6673V13.334ZM31.6673 16.6673H35.0007V35.0007H31.6673V16.6673ZM15.0007 3.33398H18.334V35.0007H15.0007V3.33398ZM20.0007 6.66732H23.334V35.0007H20.0007V6.66732Z" fill="#1E1E1E"/>
                </svg>
            </div>
            <p>Добавить в сравнение</p>
        </div>
        <div className='cartPopup-item'>
            <div>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66732 13.334H33.334V35.0007C33.334 35.9212 32.5878 36.6673 31.6673 36.6673H8.33398C7.41352 36.6673 6.66732 35.9212 6.66732 35.0007V13.334ZM10.0007 16.6673V33.334H30.0007V16.6673H10.0007ZM15.0007 20.0007H18.334V30.0007H15.0007V20.0007ZM21.6673 20.0007H25.0007V30.0007H21.6673V20.0007ZM11.6673 8.33398V5.00065C11.6673 4.08018 12.4135 3.33398 13.334 3.33398H26.6673C27.5878 3.33398 28.334 4.08018 28.334 5.00065V8.33398H36.6673V11.6673H3.33398V8.33398H11.6673ZM15.0007 6.66732V8.33398H25.0007V6.66732H15.0007Z" fill="#1E1E1E"/>
                </svg>
            </div>
            <p>Удалить из корзины</p>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
