import React, {} from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const Home = () => {
  return (
    <>
      <div>
        <Button type="primary" shape="circle" size="small">
          <Link to="/batch">自动批处理</Link>
        </Button>
      </div>
    </>
  )
}


export default Home


