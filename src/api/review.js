import Axios from "axios";

export const getRecentReviews = async () => {
  return Axios.get('/api/v1/reviews/latest');
}

export const getReviews = async (userId = null, roomId = null) => {
  let url = '/api/v1/reviews?';

  if (userId) {
    url += `userId=${userId}&`
  }

  if (roomId) {
    url += `roomId=${roomId}`
  }

  return Axios.get(url);
}

export const createReview = async (roomId, reviewContent, reviewScore) => {
  return Axios.post('/api/v1/reviews', {
    roomId: roomId,
    reviewContent: reviewContent,
    reviewScore: reviewScore,
  });
}