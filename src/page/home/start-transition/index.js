import React, { useState, useEffect } from 'react'
import { Typography, Card, Button } from 'antd'
import { flushSync } from 'react-dom'

const { Title } = Typography;

const StartTransition = () => {
    

    useEffect(() => {
        // https://mini.aphoto.cn/wx/goods/detail?id=24001&t=1640018499508
        // https://mini.aphoto.cn/wx/home/pcGetHome?t=1640018214062

        fetch(`https://mini.aphoto.cn/wx/goods/detail?id=24001&t=1640018499508`)
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