import { useEffect, useState, useLayoutEffect, Suspense } from "react";
import { fetchProfileData } from "./fakeApi";
import { Button } from 'antd'
import ErrorComponent from './error-component'


// https://codesandbox.io/s/romantic-architecture-ht3qi?file=/src/App.js

const initialResource = fetchProfileData();

function ProfilePage() {
  const [resource, setResource] = useState(initialResource);
  return (
    <>

      <Button type="primary" size="small" onClick={() => setResource(fetchProfileData())}>
        重新获取数据
      </Button>
      <Suspense fallback={<><h1>Loading 当前时间</h1></>}>
        <ProfileDetails resource={resource} />
      </Suspense>


      <ErrorComponent fallback={<h1>Banner组件出错了</h1>}>
        <Suspense fallback={<h1>Loading Banner</h1>}>
          <ProfileTimeline resource={resource} />
        </Suspense>
      </ErrorComponent>

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

export default ProfilePage;