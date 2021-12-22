import React, { } from 'react'


const HeroList = props => {
    const { data } = props

    return (
        <div className='hero-container'>
            {data.map((item) => {
                return (
                    <div className='hero-item' key={item.ename}>
                        <p>英雄：{item.cname}</p>
                        <p>皮肤名：{item.skin_name}</p>
                    </div>
                )

            })}

        </div>
    )
}

export default HeroList