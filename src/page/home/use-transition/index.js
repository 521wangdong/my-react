/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState, useLayoutEffect, Suspense, SuspenseList } from "react"
import { fetchProfileData } from "./fakeApi"
import { Card } from 'antd'
import ErrorComponent from './error-component'

import Button from './btn'


// https://codesandbox.io/s/romantic-architecture-ht3qi?file=/src/App.js

const initialResource = fetchProfileData();

function UseStartTransition() {
  const [resource, setResource] = useState(initialResource);


  function afresh () {
    setResource(fetchProfileData())
  }


  return (
    <Card style={{ width: 600, margin: `0 auto` }}>
      
      <Button afresh={afresh}/>
      

      <SuspenseList revealOrder="together">

        <Suspense fallback={<><h1>Loading 当前时间</h1></>}>
          <ProfileDetails resource={resource} />
        </Suspense>
        <ErrorComponent fallback={<h1>Banner组件出错了</h1>}>
          <Suspense fallback={<h1>Loading Banner</h1>}>
            <ProfileTimeline resource={resource} />
          </Suspense>
        </ErrorComponent>

      </SuspenseList>

    </Card>
  );
}


function ProfileDetails({ resource }) {
  useLayoutEffect(() => {
    console.log("Layout effect ProfileDetails");
    return () => {
      console.log("Layout cleanup ProfileDetails");
    };
  });

  useEffect(() => {
    console.log("Effect ProfileDetails");
    return () => {
      console.log("Cleanup ProfileDetails");
    };
  });
  const user = resource.user.read();
  console.log(user, 'user')
  return <h1>{user.time}</h1>;
}

function ProfileTimeline({ resource }) {
  const posts = resource.posts.read();

  console.log(posts, 'posts');
  useLayoutEffect(() => {
    console.log("Layout effect ProfileTimeline");
    return () => {
      console.log("Layout cleanup ProfileTimeline");
    };
  });

  useEffect(() => {
    console.log("Effect ProfileTimeline");
    return () => {
      console.log("Cleanup ProfileTimeline");
    };
  });

  return (
    <>
      <h3>Banner</h3>
      {posts.data.banner.map((post, index) => {
        return (
          <div className="banner-item" key={index}>
            <p>{post.name}</p>
            <img src={post.url} />
          </div>
        )
      })}
    </>
  );
}

export default UseStartTransition;