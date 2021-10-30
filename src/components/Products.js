import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Cards from './Cards';
import Carrousel from './Carrousel';
// import Pagination from './Pagination'

function Products(props) {
    const [products, setProducts] = useState([])
    // Mandando llamar API
    useEffect(() => {
            const URL_API_ECOMMERCE = 'https://ecomerce-master.herokuapp.com/api/v1/item';
            axios
                .get(URL_API_ECOMMERCE)
                .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.log(error))
    }, []);

    // Pagination 
    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const renderProducts = () => {
        if (products.length === 0) {
            return <div style= {{ margin: '1rem' }} >
            <Spinner animation="border" variant="primary" role="status" /> 
            <h4>Loading products...</h4>
            </div>
        } 
        return (
            <>
            <NavigationBar />
            <Carrousel />
            <h4 style= {{ marginTop: '1rem', marginLeft: '3rem' }}>There are { products.length} products</h4>
            <div className="products-container">
                {products.map(product => {
                    return (
                        <div className="display-flex">
                        {/* <Pagination /> */}
                        <Cards 
                            // products={currentProducts}
                            product={ product.product_name } 
                            description={ product.description } 
                            image={ product.image} 
                        />
                        </div>
                    );
                })}
            </div>
            </>
        );
    } 
    
    return (
        <>
        {
            renderProducts()
        }
        </>
    );
}

export default Products; 