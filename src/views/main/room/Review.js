import {Avatar, Comment} from "antd";
import Fallback from "../../../constant/Fallback";
import Score from "../../components/Score";

const reviewContainer = {
  padding: '10px 20px',
}

const cardReviewStyle = {
  borderRadius: '10px',
  boxShadow: '0px 0px 3px 3px rgba(0, 0, 0, .1)',
  padding: '0 15px',
};

const Review = (props) => {
  return (
    <div style={reviewContainer}>
      <div style={props?.card ? cardReviewStyle : null}>
        <Comment
          author={
            <>
              <span style={{fontWeight: 'bold'}}>{props?.review?.createdBy?.name ?? 'mock author'}</span>
              <Score value={props?.review.score} />
            </>
          }
          avatar={<Avatar src={props?.review?.createdBy?.avatarUrl} alt={Fallback.imageUrl} />}
          content={
            <>
              <h5 style={{fontWeight: 'bold'}}>{props?.review?.title}</h5>
              <p>{props?.review.content}</p>
            </>
          }
        />
      </div>
    </div>
  )
};

export default Review;