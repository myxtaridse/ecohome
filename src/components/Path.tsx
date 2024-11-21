import React from 'react'
import { CustomContextMain } from '../context/MainContext'

const Path = () => {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const {pathValue, windowRef}: any = React.useContext(CustomContextMain);
 
    return (
      <div className='path'>
        { windowRef > 500 ?
          pathValue.map((item: string) => (
            <>
              <p>{item}</p>
              <div className='path-arrow'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></div>
            </>
          )) : 
          (
            <div className='path-arrow-mobile'>
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" />
              </svg>

            </div>
          )
        }
      </div>
    )
  }


export default Path
