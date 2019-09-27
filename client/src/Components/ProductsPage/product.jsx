import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer'
import Products from  '../Products/Productslist'


class ProductsPage extends React.Component {
    render() {
      return ( 
      <div>
          <Navbar/>
          <Products></Products>
          <Footer></Footer>
      </div>
      )
    }
  }

  export default ProductsPage