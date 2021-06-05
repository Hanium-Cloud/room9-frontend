const avatarUrl1 = 'https://avatars.githubusercontent.com/u/35277854?v=4';
const avatarUrl2 = 'https://avatars.githubusercontent.com/u/59433441?v=4';

export default {
  BannerCarouselMockData: [
    {
      'roomId' : 1,
      'imageUrl' : '/images/mock/house_mock1.jpeg',
      'description' : '간단한 소개'
    },
    {
      'roomId' : 2,
      'imageUrl' : '/images/mock/house_mock2.jpeg',
      'description' : '간단한 소개'
    },
    {
      'roomId' : 3,
      'imageUrl' : '/images/mock/house_mock3.jpeg',
      'description' : '간단한 소개'
    },
    {
      'roomId' : 4,
      'imageUrl' : '/images/mock/house_mock4.jpeg',
      'description' : '간단한 소개'
    },
  ],
  ReviewDataMock: [
    {
      'reviewId' : 1,
      'title': '재미있는 숙소인것같아요',
      'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bencluding versions of Lorem Ipsum',
      'score': 3,
      'createdBy': {
        name: '이렐리아',
        avatarUrl: avatarUrl1,
      }
    },
    {
      'reviewId' : 2,
      'title': '허허허허헣허허헣허',
      'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bencluding versions of Lorem Ipsum',
      'score': 1,
      'createdBy': {
        name: '아칼리',
        avatarUrl: avatarUrl2,
      }
    },
  ]
};