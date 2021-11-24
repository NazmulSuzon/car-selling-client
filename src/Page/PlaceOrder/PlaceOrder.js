import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import OrderDetails from './OrderDetails';

const PlaceOrder = () => {
    const [detailsData, setDetailsData] = useState([]);
    

    useEffect(() => {
        // setCarsData(products);
        const url = `https://glacial-anchorage-88737.herokuapp.com/products`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetailsData(data))
      }, []);

    return (
        <div>
            <Row>
                {
                    detailsData.map(data => {
                        return(<OrderDetails
                        key={data.id}
                        details={data}
                        >
                        </OrderDetails>)
                    })
                }
            </Row>
        </div>
    );
};

export default PlaceOrder;