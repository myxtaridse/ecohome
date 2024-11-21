import React from 'react'

const SliderPrice = () => {
    const [isMovingL, setIsMovingL] = React.useState(false);
    const [isMovingR, setIsMovingR] = React.useState(false);
    const [startXL, setStartXL] = React.useState(0);
    const [currentXL, setCurrentXL] = React.useState(0);
    const [startXR, setStartXR] = React.useState(0);
    const [currentXR, setCurrentXR] = React.useState(0);
   
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseMove = (e: any) => {
       if (isMovingL) {
        const newX = e.clientX - startXL
            if (newX > 0 && newX < 235) {
                setCurrentXL(newX)
                
            }
        }
       if (isMovingR) {
        const newX = e.clientX - startXR
            if (newX < 0 && newX > -225) {
                setCurrentXR(newX)
                
            }
        
        }
    }
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMouseDown = (e: any) => {
     if (e.target.className === "myFavorite-filter-line-round myFavorite-round-left") {
      console.log('clickL');

      setIsMovingL(true)
      const newX = e.clientX - currentXL
      setStartXL(newX)
     }
     if (e.target.className === "myFavorite-filter-line-round myFavorite-round-right") {
      console.log('clickR');
      
      setIsMovingR(true)
      const newX = e.clientX - currentXR
      setStartXR(newX)
     }
           
       
    }
    const handleMouseUp = () => {
        if (isMovingL) {
          setIsMovingL(false)
        }
        if (isMovingR) {
          setIsMovingR(false)
        }
    }

    React.useEffect(() => {
        if (isMovingL || isMovingR) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
          }
         
      
          // Удаляем слушатели, чтобы избежать утечек памяти
          return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMovingL, isMovingR]);
   

    // const handleMouseMove = () => {}
  return (
    <div  
    className='myFavorite-filter-line'>
            <h3>1361</h3>
          <div 
           onMouseMove={(e) => handleMouseMove(e)}
           onMouseUp={handleMouseUp}
           onMouseDown={(e) => handleMouseDown(e)}
          
           style={{ cursor: 'grab', transform: `translateX(${currentXL}px)`, transition: '.1s' }}
          className='myFavorite-filter-line-round myFavorite-round-left'></div>
          <div className='myFavorite-filter-line-line'></div>
          <div className='myFavorite-filter-line-main' style={{left: `${currentXL + 15}px`, right: `${-currentXR + 15}px`}}></div>
          <h3>1361</h3>

          <div
          onMouseMove={(e) => handleMouseMove(e)}
           onMouseUp={handleMouseUp}
           onMouseDown={(e) => handleMouseDown(e)}
           style={{ cursor: 'grab', transform: `translateX(${currentXR}px)`, transition: '.1s' }}
          className='myFavorite-filter-line-round myFavorite-round-right'></div>

        </div>
  )
}

export default SliderPrice