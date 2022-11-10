import Share from "../share/Share";
import "./feed.css";
import Post from "../post/Post";

export default function feed() {
  return (
    <div className="feedWrapper">
      <Share />
      <Post />
    </div>
  );
}
