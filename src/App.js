import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './page/home'
import Batch from './page/home/batch/index'
import NoBatch from './page/home/no-batch'


const NotFound = () => {
  return (
    <div>
      找不到该页面
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/batch" component={Batch} />
        <Route path="/no-batch" component={NoBatch} />
        <Route path="/test" render={() => { return <div>测试页面</div> }} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App