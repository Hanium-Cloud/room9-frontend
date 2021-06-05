import {Avatar} from "antd";

const UserNameStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'black',
  margin: '0',
  float: 'left',
}

const UserTypeStyle = {
  fontSize: '10px',
  fontWeight: 'normal',
  color: '#888888',
  margin: '0',
  float: 'left',
  paddingTop: '10px',
  marginLeft: '3px',
}

const UserInfoStyle = {
  fontSize: '10px',
  fontWeight: 'normal',
  color: '#888888',
  margin: '0',
}

const UserCard = (props) => {
  return (
    <div style={{overflow: 'hidden',}}>
      <Avatar
        size={64}
        src={props?.user?.avatarUrl}
        style={{float: 'left'}}
      />
      <div style={{float: 'left', marginLeft: '10px', overflow: 'hidden'}}>
        <h6 style={UserNameStyle}>{props?.user?.name}</h6>
        {props?.showType ? <p style={UserTypeStyle}>{props?.user?.type}</p> : ''}
        <p style={UserInfoStyle}>{props?.user?.mobile}</p>
        <p style={UserInfoStyle}>{props?.user?.email}</p>
      </div>
      <div style={{float: 'right', paddingTop: '10px'}}>
      </div>
    </div>
  )
};

export default UserCard;