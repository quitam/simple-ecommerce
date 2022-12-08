import React from 'react';

import { Button, Card } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = (props) => {
    let { image, title, price, category, id } = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () => {
        addItem(props.data);
    };

    return (
        <Card
            style={{ width: '18rem', height: 'auto' }}
            className={`${
                theme ? 'bg-light-black text-light' : 'bg-light text-black'
            } text-center p-0 overflow-hidden shadow mx-2 mb-4`}
        >
            <Link to={`/product-details/${id}`}>
                <div
                    style={{
                        background: 'white',
                        height: '15rem',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 'inherit',
                    }}
                >
                    <div style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {title}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${price}</Card.Subtitle>
                <Card.Text>{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}</Card.Text>
                <Button
                    onClick={() => {
                        addToCart();
                        Swal.fire({
                            title: 'Success!',
                            text: 'Add product to Cart',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: '2000',
                        });
                    }}
                    className={`${
                        theme ? 'bg-dark-primary text-black' : 'bg-light-primary'
                    } d-flex align-items-center m-auto border-0`}
                >
                    <FaCartPlus size="1.7rem" className="me-2" />
                    Add to card
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
