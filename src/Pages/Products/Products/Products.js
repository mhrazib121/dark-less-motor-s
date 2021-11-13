import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import Header from '../../Shared/Header/Header';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [products] =useProducts()
    console.log(products);
    return (
        <div>
            <Header></Header>

            <Container>
            <h1 className="text-center text-success my-3"> Our Best Tour Packages</h1>
            <Row className="  m-4" xs={1} md={3} >
                {
                    products.map(product =>
                        <ProductCard key={product.id} product={product} > </ProductCard>
                    )
                }
            </Row>
        </Container>
        </div>
    );
};

export default Products;