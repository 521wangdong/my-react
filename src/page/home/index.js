import React, {} from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Typography } from 'antd'

import './index.css'


const { Title } = Typography

const Home = () => {
  return (
    <>
      <Card style={{ width: 600, margin: `0 auto` }}>
        
        <Title>开箱即用的改进</Title>

        <div className="btn-container">

          <Button type="primary" size="small">
            <Link to="/batch">自动批处理</Link>
          </Button>

          <Button type="primary" size="small">
              <Link to="/no-batch">不要自动批处理</Link>
          </Button>
        </div>

      </Card>

      <Card style={{ width: 600, margin: `0 auto` }}>
        
        <Title>并发功能</Title>

        <div className="btn-container">

        <Button type="primary" size="small">
              <Link to="/suspense">Suspense</Link>
          </Button>
      
          <Button type="primary" size="small">
              <Link to="/suspense-list">SuspenseList</Link>
          </Button>

          <Button type="primary" size="small">
              <Link to="/start-transition">startTransition</Link>
          </Button>
          

          <Button type="primary" size="small">
              <Link to="/use-start-transition">UseStartTransition</Link>
          </Button>
          
        </div>

      </Card>

    </>
  )
}


export default Home


