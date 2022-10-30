import { useState } from "react";
import Box from "./Box";
import '../App.css';

import asus from '../images/asus.jpeg';
import hp from '../images/hp.jpeg';
import dell from '../images/dell.jpeg';
import lenovo from '../images/lenovo.jpeg';
import sumsung from '../images/sumsung.jpeg';

const productData =[
    {
        name: 'ASUS',
        price: 45000,
        img: asus,
        size: '4GB'
    },
    {
        name: 'HP',
        price: 55000,
        img: hp,
        size: '4GB'
    },
    {
        name: 'DELL',
        price: 65000,
        img: dell,
        size: '4GB'
    },
    {
        name: 'LENOVO',
        price: 50000,
        img: lenovo,
        size: '8GB'
    },
    {
        name: 'SUMSUNG',
        price: 60000,
        img: sumsung,
        size: '8GB'
    },
    {
        name: 'ASUS',
        price: 45000,
        img: asus,
        size: '4GB'
    },
    {
        name: 'HP',
        price: 55000,
        img: hp,
        size: '4GB'
    },
    {
        name: 'DELL',
        price: 65000,
        img: dell,
        size: '4GB'
    },
    {
        name: 'LENOVO',
        price: 50000,
        img: lenovo,
        size: '8GB'
    },
    {
        name: 'SUMSUNG',
        price: 60000,
        img: sumsung,
        size: '8GB'
    },
    {
        name: 'ASUS',
        price: 45000,
        img: asus,
        size: '4GB'
    },
    {
        name: 'HP',
        price: 55000,
        img: hp,
        size: '4GB'
    },
    {
        name: 'DELL',
        price: 65000,
        img: dell,
        size: '4GB'
    },
    {
        name: 'LENOVO',
        price: 50000,
        img: lenovo,
        size: '8GB'
    },
    {
        name: 'SUMSUNG',
        price: 60000,
        img: sumsung,
        size: '8GB'
    },
    {
        name: 'ASUS',
        price: 45000,
        img: asus,
        size: '4GB'
    },
    {
        name: 'HP',
        price: 55000,
        img: hp,
        size: '4GB'
    },
    {
        name: 'DELL',
        price: 65000,
        img: dell,
        size: '4GB'
    },
    {
        name: 'LENOVO',
        price: 50000,
        img: lenovo,
        size: '8GB'
    },
    {
        name: 'SUMSUNG',
        price: 60000,
        img: sumsung,
        size: '8GB'
    },
    {
        name: 'HP',
        price: 55000,
        img: hp,
        size: '4GB'
    },
    {
        name: 'DELL',
        price: 65000,
        img: dell,
        size: '4GB'
    },
    {
        name: 'LENOVO',
        price: 50000,
        img: lenovo,
        size: '8GB'
    },
    {
        name: 'SUMSUNG',
        price: 60000,
        img: sumsung,
        size: '8GB'
    }
]


function ProductList(){

    const [data, setData] = useState(productData);

    return(
        <div className="parent">
            {data.map((item, index)=>{
                return <Box item={item} />
            })
            }
        </div>
    );
}

export default ProductList;