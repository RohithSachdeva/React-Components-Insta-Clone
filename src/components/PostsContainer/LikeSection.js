// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";

const LikeSection = props => {



const increaseLikes = () => {
  return props.likes + 1;
};
  console.log(props);
  
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick ={increaseLikes}/>
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">
      {props.likes} likes</p>
</div>
  )
};

export default LikeSection;

// const [likes] = useState(props.likes)

// const increaseLikes = () => {
//   setLikes(likes => likes + 1);
// };

// onClick ={() => setLikes(likes)};

//Click the heart to update likes 

// const ProfileCard = props => {
//   const [points, setPoints] = useState(props.propsPassedFromParent.pride);

//   const incrementPoints = () => {
//     setPoints(points => points + 1);
//   };
//   return (
//     <div className="box">
//       <ProfileImage image={props.propsPassedFromParent.profileImg} />
//       <div>
//         <Title name={props.propsPassedFromParent.name} />
//         <PridePoints incrementPoints={incrementPoints} points={points} />
//       </div>
//       <Copy copy={props.propsPassedFromParent.copy} />
//     </div>
//   );
// };