const ContainerStyle = {
  textAlign: 'center',
  padding: '10px 0 0 0',
}

const TitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0',
}

const ContentStyle = {
  margin: '4px 0 0 0',
  fontSize: '12px',
  color: '#888888',
}


const PageHeader = (props) => {

  return (
    <div style={ContainerStyle}>
      <h3 style={TitleStyle}>{props?.title}</h3>
      <p style={ContentStyle}>{props?.content}</p>
    </div>
  )
};

export default PageHeader;