import React from "react";
import { CiBoxList } from "react-icons/ci";
import { MdOutlineStarOutline } from "react-icons/md";
import { motion } from "motion/react";

//propes inside ({data}) from background.jsx
function Note({ data, refrence }) {
  const stars = [];
  const count = data.stars;
  for (let i = 0; i < count; i++) {
    stars.push(<MdOutlineStarOutline key={i} />);
  }
  return (
    <motion.div drag dragConstraints={refrence} className="mainnote">
      <h2 className="icon">{data.icon && <CiBoxList />}</h2>
      <h4 className="title">{data.title}</h4>
      {data.text.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
      {data.bottom && (
        <div className="footer" style={{ backgroundColor: data.notecolor }}>
          <h4>{data.day}</h4>
          <h4>{stars}</h4>
        </div>
      )}
    </motion.div>
  );
}

export default Note;
