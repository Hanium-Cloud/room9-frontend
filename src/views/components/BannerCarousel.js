import {Carousel} from "antd";
import MockData from '../../constant/MockData';

const carouselItemContainer = {
  height: '160px',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
}

const BannerCarousel = (props) => {
  return (
    <>
      <Carousel autoplay>
        {
          props.mock ?
            MockData.BannerCarouselMockData.map(item => (
              <div key={item.roomId}>
                <div style={{...carouselItemContainer, backgroundImage: `url('${item.imageUrl}')`}}>
                  <span style={{color: 'white', fontSize: '20px'}}>{item.description}</span>
                </div>
              </div>
            ))
            :
            props.items.map((item) => (
              <div key={item.roomId}>
                <div style={{...carouselItemContainer, backgroundImage: `url('${item.imageUrl}')`}}>
                  <span style={{color: 'white', fontSize: '20px'}}>{item.description}</span>
                </div>
              </div>
            ))
        }
      </Carousel>
    </>
  )
};

export default BannerCarousel;