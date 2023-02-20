import User from "./User";
import Message from "./Message";
import Actions from "./Actions";
import ProfileImage from "./ProfileImage";

function Tweet({ tweet }) {

  console.log(tweet)
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">
        <div className="top">

          <User name={tweet.user.name} handle={tweet.user.handle} timestamp={tweet.timestamp} />

        </div>
        <Message msg={tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;