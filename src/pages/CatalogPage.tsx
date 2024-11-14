import React from 'react'
import Catalog from '../components/Catalog/Catalog'
import { CustomContextMain } from '../context/MainContext'

const CatalogPage = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const {setPathValue}: any = React.useContext(CustomContextMain);
  React.useEffect(() => {
      setPathValue([])
  }, [setPathValue])
    
  return (
    <div className="catalog-page">
      <Catalog />
    </div>
  )
}

export default CatalogPage
