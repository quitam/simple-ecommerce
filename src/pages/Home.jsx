import React, { useEffect, useState } from 'react';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SearchFilter from 'react-filter-search';

const Home = () => {
    const [theme] = useThemeHook();
    const [searchInput, setSearchInput] = useState('');
    const [productData, setProductData] = useState([]);

    async function getResponse() {
        const res = await fetch('https://fakestoreapi.com/products').then((res) => res.json());
        setProductData(await res);
    }

    useEffect(() => {
        getResponse();
        console.log(productData);
    }, []);
    return (
        <>
            <Header />
            <Container className="py-4">
                <Row className="justify-content-center">
                    <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
                        <h2 className={theme ? 'text-light mt-5' : 'text-black mt-5'}>Search product</h2>
                        <InputGroup className="mb-3">
                            <InputGroup.Text
                                className={theme ? 'bg-light-black text-dark-primary' : 'bg-light-2 text-black'}
                            >
                                <FaSearch />
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Search product"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                className={theme ? 'bg-light-black text-dark-primary' : 'bg-light text-black'}
                            />
                        </InputGroup>
                    </Col>
                    <SearchFilter
                        value={searchInput}
                        data={productData}
                        renderResults={(results) => (
                            <Row className="justify-content-center">
                                {results.map((item, i) => (
                                    <ProductCard data={item} key={i} />
                                ))}
                            </Row>
                        )}
                    ></SearchFilter>
                </Row>
            </Container>
        </>
    );
};

export default Home;
