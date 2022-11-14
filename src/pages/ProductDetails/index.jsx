import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../../GlobalComponents/ThemeProvider';
import { FaCartPlus } from 'react-icons/fa';

import Header from '../../components/Header';

import Lightbox from 'react-lightbox-component';
import 'react-lightbox-component/build/css/index.css';
import './product-details.scss';

const ProductDetails = () => {
    let { productId } = useParams();
    const [productData, setProductData] = useState([]);
    const { addItem } = useCart();
    const [theme] = useThemeHook();

    useEffect(() => {
        getResponse();
    }, []);

    const getResponse = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${productId}`).then((res) => res.json());
        setProductData(await res);
    };

    return (
        <>
            <Header />
            <Container className="py-5">
                <Row className="justify-content-center mt-5">
                    <Col xs={10} md={7} lg={5} className="p-0">
                        <Lightbox
                            images={[
                                {
                                    src: productData.image,
                                    title: productData.title,
                                    description: 'Y-Shop',
                                },
                                {
                                    src: productData.image,
                                    title: productData.title,
                                    description: 'IMG-1',
                                },
                                {
                                    src: productData.image,
                                    title: productData.title,
                                    description: 'IMG-2',
                                },
                                {
                                    src: productData.image,
                                    title: productData.title,
                                    description: 'IMG-3',
                                },
                            ]}
                        />
                    </Col>
                    <Col xs={10} md={7} lg={7} className={`${theme ? 'text-light' : 'text-black'} product-details`}>
                        <h1>{productData.title}</h1>
                        <Button
                            className={`${
                                theme ? 'bg-dark-primary text-black' : 'bg-light-primary'
                            } d-flex align-items-center mt-4 border-0`}
                            style={{ borderRadius: '0' }}
                            onClick={() => addItem(productData)}
                        >
                            <FaCartPlus size="1.7rem" className="me-2" />
                            Add to Cart
                        </Button>
                        <b className={`${theme ? 'text-dark-primary' : 'text-light-primary'} h4 mt-3 d-block`}>
                            Price: ${productData.price}
                        </b>
                        <br />
                        <b>Rate: 5.0 ⭐</b>
                        <p className="mt-3 h5" style={{ opacity: '0.8', fontWeight: '300' }}>
                            {productData.description}
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ProductDetails;
