
const Container = {
  borderBottom: '1px solid #fafafa',
  overflow: 'hidden',
  padding: '15px 20px',
  };


const SimpleList = (props) => {
  return (
    <>
      {
        props?.items.map(item => (
          <div style={Container}>
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