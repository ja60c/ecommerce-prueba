import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import Cards from './Cards';

function Products(props) {
    const [products,setProducts] = useState([])

    useEffect(() => {
        // const getProducts = () => {
            const URL_API_ECOMMERCE = 'https://ecomerce-master.herokuapp.com/api/v1/item';
            axios
                .get(URL_API_ECOMMERCE)
                .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.log(error))
    }, []);
    
    // useEffect(() => getProducts(), []);
    const renderProducts = () => {
        if (products.length === 0) {
            return <h2>Loading products...</h2>
        } 
        return (
            <>
                <NavigationBar />
                <h2>There are { products.length} products</h2>
                <div>
                    {products.map(product => {
                        return (
                            <Cards 
                                product={ product.product_name } 
                                description={ product.description } 
                                image={ product.image} 
                            />
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

    // return (
    //     <>
    //     <h1 className="display-6 text-center m-3">Aquí van los productos</h1>
    //     {/* <Cards 
    //         product='Una estaca'
    //         description='Este es la descripción de mi producto'
    //         image='https://www.aconstructoras.com/images/estacasDeMaderaDe300mmDeLargo30x30mmgruesoConPunta.jpg'
    //     /> */}
    //     </>
    // )
// }

export default Products; 