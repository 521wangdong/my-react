import React, { useState, useEffect } from 'react'
import { Typography, Card, Button } from 'antd'
import { flushSync } from 'react-dom'

const { Title } = Typography;

const StartTransition = () => {
    

    useEffect(() => {

        fetch(`http://jsonplaceholder.typicode.com/albums/1/photos`)
            .then(response => response.json())
            .then(json => console.log(json))

    }, [])    
    return (
        <Card style={{ width: 600 , margin: `0 auto`}}>
            <Title>startTransition</Title>

            

       </Card>
    )

}


export default StartTransition