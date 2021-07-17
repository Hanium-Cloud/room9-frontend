const tagStyle = {
  backgroundColor: '#E4E4E7',
  color: '#8F92A1',
  fontSize: '12px',
  padding: '3px 8px',
  marginRight: '3px',
}

const TagGroup = (props) => {
  return (
    <div>
      {
        props.tags.map((tag, idx) => (
          <span key={idx} style={tagStyle}>{tag}</span>
        ))
      }
    </div>
  )
};

export default TagGroup;