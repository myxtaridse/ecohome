import React from 'react'

const Select = () => {
    const [isSelectAll, setIsSelectAll] = React.useState(false)
  return (
    <div className="cart-main-select-all" onClick={() => setIsSelectAll(!isSelectAll)}>
        <div>
            {
                isSelectAll ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(207, 78, 50)"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5Z"></path></svg>
            }
        </div>
        <p>Выделить все</p>
    </div>
  )
}

export default Select