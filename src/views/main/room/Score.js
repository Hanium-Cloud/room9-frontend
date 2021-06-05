import {StarFilled, StarOutlined} from "@ant-design/icons";


// props.value
const Score = (props) => {
  return (
    <span style={{marginLeft: '10px'}}>
      {
        [1, 2, 3, 4, 5].map((num) => (
          num <= props.value ?
            <StarFilled style={{color: "#F2C94C"}} />
            :
            <StarOutlined style={{color: "#F2C94C"}} />
        ))
      }
    </span>
  )
};

export default Score;