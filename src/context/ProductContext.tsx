import React from 'react'

export const CustomContextProductItem = React.createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductContext = ({children}: any) => {

    const [value, setValue] = React.useState(null)

React.useEffect(() => {
    async function reqProduct() {
        const res = await fetch('http://localhost:3000/goods');
        return res.json();
    }
    reqProduct().then((data) => {
        setValue(data)
    }).catch((err) => console.log(err)
    )
    
}, []);

  return (
    <CustomContextProductItem.Provider value={value}>
       {children}
    </CustomContextProductItem.Provider>
  )
}

export default ProductContext;