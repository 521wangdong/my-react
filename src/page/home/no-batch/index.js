import React, { useState, useLayoutEffect } from 'react'
import { Typography, Card, Button } from 'antd';
import { flushSync } from 'react-dom'

const { Title } = Typography;


const NoBatch = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)
    

    const handleClick = () => {
        flushSync(() => {
            setCount ( c  =>  c  +  1 )
        })

        flushSync(() => {
            setFlag(f => !f) 
        })
         
    }

    useLayoutEffect(() => {
    console.log("Commit");
    });
    console.log("Render");
    return (
        <Card style={{ width: 600 , margin: `0 auto`}}>
            <Title>不想批处理</Title>

            <Button type="primary" size="small" onClick={handleClick}>
            不想批处理
            </Button>
        
            <p>count: {count}</p>
            <p style={{ color: flag ? `blue` : `pink` }}>flag: {flag}</p>

       </Card>
    )

}


export default NoBatch