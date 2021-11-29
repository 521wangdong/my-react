import React, { useState, useLayoutEffect } from 'react'

const Batch = () => {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)
    function fetchSome() {
        return new Promise((resolve) => setTimeout(resolve, 100))
    }
    const handleClick = () => {
        console.log("=== 点击了 ===");
        fetchSome()
            .then(() => {
                setCount ( c  =>  c  +  1 ) ; 
                setFlag(f => !f) 
        })
    }
    return (
        <div>
            <h3>批处理</h3>

            <div onClick={handleClick}>Next</div>
            <p>count: {count}</p>
            <p style={{ color: flag ? `blue` : `pink` }}>flag: {flag}</p>
            <LogEvents />
        </div>
    )

}

function LogEvents(props) {
  useLayoutEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}

export default Batch