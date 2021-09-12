import {useHistory} from "react-router-dom";

const Container = {
  borderBottom: '1px solid #fafafa',
  overflow: 'hidden',
  padding: '15px 20px',
  };


const SimpleList = (props) => {
  const history = useHistory();

  return (
    <>
      {
        props?.items.map((item, idx) => (
          <div key={idx} style={Container} onClick={() => history.push(item?.path)}>
            <div style={{float: 'left'}}>
              {item?.name}
            </div>
            <div style={{float: 'right'}}>
              {item?.icon}
            </div>
          </div>
        ))
      }
    </>
  )
};

export default SimpleList;