import { useEffect, useState, useLayoutEffect, Suspense } from "react";
import { fetchProfileData } from "./fakeApi";
import { Button } from 'antd'

// https://codesandbox.io/s/romantic-architecture-ht3qi?file=/src/App.js

const initialResource = fetchProfileData();

function ProfilePage() {
  const [resource, setResource] = useState(initialResource);
  return (
    <>
      <Suspense
        fallback={
          <>
            <h1>Loading 英雄联盟的英雄...</h1>
          </>
        }
      >
        
       <Button type="primary" size="small" onClick={() => setResource(fetchProfileData())}>
           重新获取数据
            </Button>
        <ProfileDetails resource={resource} />
        <Suspense fallback={<h1>Loading 王者荣耀的英雄...</h1>}>
          
          <ProfileTimeline resource={resource} />
          
        </Suspense>

        
      </Suspense>
    </>
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
  return <h1>{user.name}</h1>;
}

function ProfileTimeline({ resource }) {
  const posts = resource.posts.read();
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
    <ul>
      {posts.map((post) => (
        <li key={post.ename}>{post.cname}</li>
      ))}
    </ul>
  );
}

export default ProfilePage;