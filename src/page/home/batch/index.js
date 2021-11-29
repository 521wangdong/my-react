import React, { useState, useLayoutEffect } from 'react'
import { Typography, Card, Button } from 'antd';
const { Title } = Typography;

const Batch = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)
    function fetchSome() {
        return new Promise((resolve) => setTimeout(resolve, 100))
    }
    const handleClick = () => {
        fetchSome()
            .then(() => {
                setCount ( c  =>  c  +  1 ) ; 
                setFlag(f => !f) 
        })
    }

    useLayoutEffect(() => {
    console.log("Commit");
    });
    console.log("Render");
    return (
        <Card style={{ width: 600 , margin: `0 auto`}}>
            <Title>自动批处理</Title>

            <Button type="primary" size="small" onClick={handleClick}>
            增加
            </Button>
            <p>count: {count}</p>
            <p style={{ color: flag ? `blue` : `pink` }}>flag: {flag}</p>
       </Card>
    )

}


export default Batch