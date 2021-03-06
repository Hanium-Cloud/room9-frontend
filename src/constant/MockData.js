export const avatarUrl1 = 'https://avatars.githubusercontent.com/u/35277854?v=4';
export const avatarUrl2 = 'https://avatars.githubusercontent.com/u/59433441?v=4';

export const houseImage1 = '/images/mock/house_mock1.jpeg';
export const houseImage2 = '/images/mock/house_mock2.jpeg';
export const houseImage3 = '/images/mock/house_mock3.jpeg';
export const houseImage4 = '/images/mock/house_mock4.jpeg';

export default {
  InitRoom: {
    "roomId" : 1,
    "username" : "로딩중",
    "title" : "로딩중",
    "location" : "로딩중",
    "limitPeople" : 0,
    "price" : 10000,
    "like" : 0,
    "images" : [ {
      "url" : "https://roomimg.s3.ap-northeast-2.amazonaws.com/도메인이름/랜덤으로생성된느번호pngFIle.png"
    }, {
      "url" : "https://roomimg.s3.ap-northeast-2.amazonaws.com/도메인이름/랜덤으로생성된느번호jpgFIle.jpg"
    } ],
    "content" : "로딩중",
    "rule" : "로딩중",
    "charge" : 0,
    "room_configuration" : [],
    "room_amenity" : [],
    "reviewCount": 0,
    "avgScore": 0,
  },
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
      'id': 1,
      'thumbnailUrl': houseImage1,
      'name': '제주 펜션',
      'region': '제주시',
      'price': 50000,
      'score': 3.58,
      'reviewCount': 132
    },
    {
      'id': 2,
      'thumbnailUrl': houseImage2,
      'name': '강릉 하늘 오두막',
      'region': '강릉시',
      'price': 35000,
      'score': 4.42,
      'reviewCount': 81
    }
  ],
  mockGuestUser: {
    avatarUrl: avatarUrl1,
    name: '아리',
    type: 'guest',
    mobile: '01012345678',
    email: 'test@test.com'
  },
  mockHostUser: {
    avatarUrl: avatarUrl2,
    name: '블리츠크랭크',
    type: 'host',
    mobile: '01012345678',
    email: 'test@test.com'
  },
};