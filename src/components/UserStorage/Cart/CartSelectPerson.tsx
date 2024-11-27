import React from 'react'

interface CartSelectPersonType {
    isLegalEntity: boolean;
    setIsLegalEntity: (isLegalEntity: boolean) => void;
}

const CartSelectPerson: React.FC<CartSelectPersonType> = ({isLegalEntity, setIsLegalEntity}) => {
  return (
    <div className='cartForm-select-user'>
    <div className='cartForm-select-user-item' onClick={() => setIsLegalEntity(false)}>
        
        <div>
            {
                !isLegalEntity && <span></span>
            }
        </div>
        <p>Физическое лицо</p>
    </div>
    <div className='cartForm-select-user-item' onClick={() => setIsLegalEntity(true)}>
        
        <div>
            {
                isLegalEntity && <span></span>
            }
        </div>
        <p>Юридическое лицо</p>
    </div>
</div>
  )
}

export default CartSelectPerson