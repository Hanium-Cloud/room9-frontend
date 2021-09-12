import Axios from "axios";

export const getRecentReviews = async () => {
  return Axios.get('/api/v1/reviews/latest');
}