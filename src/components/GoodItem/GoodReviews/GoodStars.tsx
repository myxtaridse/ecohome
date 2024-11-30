import React from 'react'
// import CartPopup from '../../UserStorage/Cart/CartMobile/CartPopup'

const GoodStars = () => {
    const [isMore, setIsMore] = React.useState(false)
    console.log(isMore);
    
  return (
    <>
        <div className='goodStars'>
            <div>
                <div className='goodStars-flex'>
                    <h2>Оценка 4,8</h2>
                    <div>
                        <svg viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.00009 12.75L4.59172 15.4427L5.7903 10.418L1.86719 7.05737L7.01634 6.64456L9.00009 1.875L10.9839 6.64456L16.133 7.05737L12.2099 10.418L13.4085 15.4427L9.00009 12.75Z" fill="#FFCE54"/>
                        </svg>
                    </div>
                </div>
                <p>на основе 22 отзывах</p>
            </div>
            <div className='goodStars-info-svg' onClick={() => setIsMore(true)}>
                <svg viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9997 25.6673C7.55635 25.6673 2.33301 20.4439 2.33301 14.0007C2.33301 7.55733 7.55635 2.33398 13.9997 2.33398C20.4429 2.33398 25.6663 7.55733 25.6663 14.0007C25.6663 20.4439 20.4429 25.6673 13.9997 25.6673ZM13.9997 23.334C19.1544 23.334 23.333 19.1553 23.333 14.0007C23.333 8.84599 19.1544 4.66732 13.9997 4.66732C8.84501 4.66732 4.66634 8.84599 4.66634 14.0007C4.66634 19.1553 8.84501 23.334 13.9997 23.334ZM15.1663 12.2507V17.5007H16.333V19.834H11.6663V17.5007H12.833V14.584H11.6663V12.2507H15.1663ZM15.7497 9.33398C15.7497 10.3005 14.9661 11.084 13.9997 11.084C13.0332 11.084 12.2497 10.3005 12.2497 9.33398C12.2497 8.36748 13.0332 7.58398 13.9997 7.58398C14.9661 7.58398 15.7497 8.36748 15.7497 9.33398Z" fill="#CF4E32"/>
                </svg>
            </div>

            
            
        </div>

        {/* {
            isMore && (
                <CartPopup setIsMore={setIsMore}>
                    <div>
                        4.8
                    </div>
                </CartPopup>
            )
        } */}
    </>
  )
}

export default GoodStars


