import {EnvironmentOutlined, HeartTwoTone, StarFilled} from "@ant-design/icons";
import {useHistory} from "react-router-dom";

const Container = {
  padding: '10px 20px',
  overflow: 'hidden',
}

const ImageBoxStyle = {
  height: '180px',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  borderRadius: '15px',
}

const RoomTitleStyle = {
  fontSize: '18px',
  lineHeight: '18px',
  verticalAlign: 'middle',
  marginTop: '14px',
  marginBottom: '0',
}

const regionStyle = {
  lineHeight: '10px',
  fontSize: '10px',
  color: '#888888'
}

const RoomCard = (props) => {
  const history = useHistory();
  const goToRoomDetail = (roomId) => {
    history.push(`/room/${roomId}`); // TODO
  }

  return (
    <div style={Container}>
      <div onClick={() => goToRoomDetail(props?.room.id)}>
        <div style={{...ImageBoxStyle, backgroundImage: `url('${props?.room.thumbnailUrl}')`}}/>
        <div style={{float: 'left'}}>
          <h3 style={RoomTitleStyle}>
            {props?.room.name}
            <span>
              <StarFilled style={{color: '#F2C94C', marginLeft: '10px', fontSize: '10px'}} />
              <span style={{fontSize: '10px'}} >{props?.room.score?.toFixed(2)}</span>
              <span style={{fontSize: '10px', color: '#888888'}} > ({props?.room.reviewCount})</span>
              <HeartTwoTone style={{marginLeft: '5px', fontSize: '10px'}} twoToneColor="#eb2f96" />
              <span style={{fontSize: '10px'}} > {props?.room?.like ?? 0}</span>
          </span>
          </h3>
          <span style={regionStyle}>
          <EnvironmentOutlined />
            {props?.room.region}
        </span>
        </div>
        <div style={{float: 'right', lineHeight: '56px', verticalAlign: 'center'}}>
          <p style={{margin: '0', fontSize: '22px', color: '#049FFF'}}>{props?.room?.price?.toLocaleString()} 원 <span style={{color: '#888888'}}>/ 박</span></p>
        </div>
      </div>
    </div>
  )
};

export default RoomCard;