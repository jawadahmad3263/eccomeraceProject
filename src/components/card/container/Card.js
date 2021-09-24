import React from 'react'
import CardUi from '../UI/CardUi'

export default function Card(props) {
    const {product,index} = props;
    return (
        <CardUi product={product} index={index} />
    )
}
