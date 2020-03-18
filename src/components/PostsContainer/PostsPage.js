//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummydata from "../../dummy-data"
const PostsPage = () => {
  // set up state for your data 
  const [postData, setPostData] = useState(dummydata);
  return (
    <div className="posts-container-wrapper">
      {postData.map(data => (
        <Post key = {data.username} post = {data} />
      ))}
    </div>
  );
};

export default PostsPage;


const [data] = useState(dummydata);

//Post will use username and data

// return (
//   <div className="posts-container-wrapper">
//     {data.map(p => (
//       <ProfileCard key={p.id} propsPassedFromParent={p} />
//     ))}
//   </div>
// );
// };

// export default ProfilePage;