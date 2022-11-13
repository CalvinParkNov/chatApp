import Share from "../share/Share";
import "./feed.css";
import Post from "../post/Post";
import { Posts } from "../../dummyData";

export default function feed() {
  return (
    <div className="feedWrapper">
      <Share />
      {Posts.map((e) => (
        <Post key={e.id} post={e} />
      ))}
    </div>
  );
}
