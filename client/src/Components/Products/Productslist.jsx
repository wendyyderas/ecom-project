import React, { Component } from 'react';
import './index.css'


class products extends Component{
constructor(props){
    super(props);
    this.state={
        error:null,
        isLoaded: false,
        products: []

    }
}
componentDidMount() {
    fetch('./data/products.json')
        .then((res) => res.json())
        .then(
            (data) => {
                this.setState({
                    isLoaded: true,
                    products: data.products
                });
            })
        .catch(error => {
            this.setState({
                isLoaded: true,
                error
            })
        });
        


}


render() {
    const { error, isLoaded, products } = this.state;

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
       
        return (
            <main class="main">

          <section class="jumbotron text-center">
            <div class="container">
              <p class="bake">Cake&Bake</p>
            </div>
          </section>
          
            <div class="album py-5 bg-light">
            <div class="container-fluid">
           
              <div class="row">
            
                {products.map((products,index) =>(
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src={products.url} height="275" width="100%" alt={products.description}/>
                            <div class="card-body">
                            <p class="card-text">{products.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Buy</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">{products.price}</button>
                            </div>
                            <small class="text-muted">{products.productName}</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                ))}
            </div>   
            </div>
            </div>
           </main>
            
            
        )
}
}
}

export default products

