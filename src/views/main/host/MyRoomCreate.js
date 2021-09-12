import AppHeader from "../../layouts/AppHeader";
import TopNavigation from "../../layouts/TopNavigation";
import {Button, Col, Input, Row, Upload} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {EnvironmentOutlined, UserOutlined, WarningOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";
import TagGroup from "../../components/TagGroup";
import {createRoom} from "../../../api/room";
import {useHistory} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {userState} from "../../../store/state";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


const MyRoomCreate = (props) => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [rule, setRule] = useState('');
  const [description, setDescription] = useState('');
  const [limit, setLimit] = useState(0);
  const [charge, setCharge] = useState(0);
  const [addCharge, setAddCharge] = useState(0);
  const [facilities, setFacilities] = useState([]);
  const [confs, setConfs] = useState([]);
  const [images, setImages] = useState([]);

  const [inputFacility, setInputFacility] = useState('');
  const [inputConf, setInputConf] = useState('');
  const [inputConfNum, setInputConfNum] = useState(0);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(async () => {
    const getPreviewImages = async () => {
      const results = await Promise.all(images.map(async (imageFile) => {
        return await getBase64(imageFile);
      }));

      setPreviewImages(
        results
      );
    }

    const previewImages = await getPreviewImages();
  }, [images]);

  const user = useRecoilValue(userState);
  const history = useHistory();
  const tryCreateRoom = async () => {
    let result = await createRoom(
      user.id,
      title,
      description,
      address,
      rule,
      charge,
      addCharge,
      limit,
      facilities,
      confs,
      images,
    ).data;
    console.log(result);
    // history.push(`/room/${result.roomId}`)
  }

  return (
    <div>
      <AppHeader/>
      <TopNavigation title="방만들기"/>

      <Row style={{padding: '5px 15px'}}>
        <Col span={24} style={{padding: '5px 0'}}>
          <Input value={title} onChange={(e) => {
            setTitle(e.target.value)
          }} placeholder="숙소 제목"/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <Input value={address} onChange={(e) => {
            setAddress(e.target.value)
          }} addonAfter={<EnvironmentOutlined/>} placeholder="숙소 주소"/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <Input value={rule} onChange={(e) => {
            setRule(e.target.value)
          }} addonAfter={<WarningOutlined/>} placeholder="숙소 주의사항"/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <TextArea value={description} onChange={(e) => {
            setDescription(e.target.value)
          }} autoSize={{minRows: 10}} placeholder="숙소 설명" showCount maxLength={150}/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <Input value={limit} onChange={(e) => {
            setLimit(e.target.value)
          }} addonAfter={<UserOutlined/>} style={{width: '100%'}} placeholder="제한 인원"/>
        </Col>
        <Col span={12} style={{padding: '5px 0', paddingRight: '5px'}}>
          <p style={{padding: '0 0 0 3px', margin: '0', color: '#777777'}}>숙소 요금</p>
          <Input value={charge} onChange={(e) => {
            setCharge(e.target.value)
          }} addonAfter="₩" style={{width: '100%'}} placeholder="요금"/>
        </Col>
        <Col span={12} style={{padding: '5px 0', paddingLeft: '5px'}}>
          <p style={{padding: '0 0 0 3px', margin: '0', color: '#777777'}}>추가 요금</p>
          <Input value={addCharge} onChange={(e) => {
            setAddCharge(e.target.value)
          }} addonAfter="₩" style={{width: '100%'}} placeholder="인원 추가 요금"/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <Input.Search value={inputFacility} onChange={(e) => {
            setInputFacility(e.target.value)
          }} onSearch={(value) => {
            setFacilities([
              ...facilities,
              value
            ]);
            setInputFacility('');
          }} placeholder="부대시설" enterButton="+"/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <TagGroup tags={facilities}/>
        </Col>
        <Col span={12} style={{padding: '5px 0'}}>
          <Input value={inputConf} onChange={(e) => {
            setInputConf(e.target.value);
          }} placeholder="방 구성" />
        </Col>
        <Col span={12} style={{padding: '5px 0'}}>
          <Input.Search value={inputConfNum} onChange={(e) => {
            setInputConfNum(e.target.value)
          }} onSearch={(value) => {
            setConfs([
              ...confs,
              inputConf + ' ' + value,
            ]);
            setInputConf('');
            setInputConfNum(0);
          }} placeholder="개수" enterButton="+"/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <TagGroup tags={confs}/>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          <input id="uploader" onChange={async (e) => {
            setImages([
              ...images,
              e.target.files[0],
            ])
          }} type="file" style={{display: 'none'}}/>
          <Button onClick={() => {
            document.getElementById('uploader').click();
          }}>파일 추가하기</Button>
        </Col>
        <Col span={24} style={{padding: '5px 0'}}>
          {
            previewImages.map((previewImageUrl, idx) => {
              return (
                <Col span={8} key={idx}>
                  <div style={{
                    backgroundImage: `url('${previewImageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    height: '120px',
                  }}/>
                </Col>
              );
            })
          }
        </Col>
      </Row>
      <Row style={{padding: '0 15px'}}>
        <Col span={24} style={{padding: '5px'}}>
          <Button block onClick={() => tryCreateRoom()}>등록하기</Button>
        </Col>
      </Row>
    </div>
  )
};

export default MyRoomCreate;