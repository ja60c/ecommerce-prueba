import NavigationBar from './NavigationBar';
import Cards from './Cards';

function Products() {
    
    return (
        <>
        <NavigationBar />
        <h1 className="display-6 text-center m-3">Aquí van los productos</h1>
        <Cards 
            product='Hola desde el nombre del producto'
            description='Este es la descripción de mi producto'
            image='https://www.aconstructoras.com/images/estacasDeMaderaDe300mmDeLargo30x30mmgruesoConPunta.jpg'
        />
        </>
    )
}

export default Products; 