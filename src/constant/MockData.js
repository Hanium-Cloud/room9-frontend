const avatarUrl1 = 'https://avatars.githubusercontent.com/u/35277854?v=4';
const avatarUrl2 = 'https://avatars.githubusercontent.com/u/59433441?v=4';

const houseImage1 = '/images/mock/house_mock1.jpeg';
const houseImage2 = '/images/mock/house_mock2.jpeg';
const houseImage3 = '/images/mock/house_mock3.jpeg';
const houseImage4 = '/images/mock/house_mock4.jpeg';

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
  ],
  RoomCardMock: [
    {
      'roomId': 1,
      'thumbnailUrl': houseImage1,
      'name': '제주 펜션',
      'region': '제주시',
      'price': 50000,
      'score': 3.58,
      'reviewCount': 132
    },
    {
      'roomId': 2,
      'thumbnailUrl': houseImage2,
      'name': '강릉 하늘 오두막',
      'region': '강릉시',
      'price': 35000,
      'score': 4.42,
      'reviewCount': 81
    }
  ]
};