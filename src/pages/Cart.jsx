import React from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BsFillCartXFill, BsFillCartCheckFill } from 'react-icons/bs';
import Header from '../components/Header';

const Cart = () => {
    const [theme] = useThemeHook();
    const { isEmpty, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
    return (
        <>
            <Header />
            <Container className="py-4 mt-5">
                <h2 className={`${theme ? 'text-light' : 'text-black'} text-center`}>
                    {isEmpty ? 'Your cart is empty' : 'Your cart'}
                </h2>
                <Row className="justify-content-center">
                    <Table striped bordered hover responsive="sm" variant={theme ? 'dark' : 'light'} className="mb-5">
                        <thead>
                            <tr className="text-center">
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index} className="text-center">
                                        <td>
                                            <div
                                                style={{
                                                    background: 'white',
                                                    height: '8rem',
                                                    overflow: 'hidden',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <div style={{ padding: '.5rem' }}>
                                                    <img src={item.image} style={{ width: '4rem' }} alt={item.title} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h6
                                                style={{
                                                    textOverflow: 'ellipsis',
                                                    overflow: 'hidden',
                                                    whiteSpace: 'nowrap',
                                                    width: '20rem',
                                                }}
                                            >
                                                {item.title}
                                            </h6>
                                        </td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <Button
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                className="ms-2"
                                            >
                                                -
                                            </Button>
                                            <Button
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                                className="ms-2"
                                            >
                                                +
                                            </Button>
                                            <Button
                                                onClick={() => removeItem(item.id)}
                                                className="ms-2"
                                                variant="danger"
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    {!isEmpty && (
                        <Row
                            style={{ position: 'fixed', bottom: '0' }}
                            className={`${
                                theme ? 'bg-light-black text-light' : 'bg-light text-black'
                            } justify-content-center w-100`}
                        >
                            <Col className="py-2">
                                <h4>Total price: {cartTotal}</h4>
                            </Col>
                            <Col className="p-0" md={4}>
                                <Button variant="danger" className="m-2" onClick={() => emptyCart()}>
                                    <BsFillCartXFill size="1.7rem" className="me-2" />
                                    Clear Cart
                                </Button>
                                <Button variant="success" className="m-2" onClick={() => emptyCart()}>
                                    <BsFillCartCheckFill size="1.7rem" className="me-2" />
                                    Checkout
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Cart;
