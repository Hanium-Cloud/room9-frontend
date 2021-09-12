import Axios from "axios";

export const createRoom = async (userId,
                         title,
                         content,
                         location,
                         rule,
                         price,
                         addCharge,
                         limit,
                         facilities,
                         conf,
                         images) => {

  const formData = new FormData();
  formData.append('userId', userId);
  formData.append('title', title);
  formData.append('content', content);
  formData.append('detailLocation', location);
  formData.append('rule', rule);
  formData.append('price', price);
  formData.append('addCharge', addCharge);
  formData.append('limit', limit);
  facilities.forEach((facil) => {
    formData.append('facilities[]', facil)
  });
  images.forEach((image) => {
    formData.append('images[]', image);
  });
  conf.forEach((c, idx) => {
    const spt = c.split(' ');
    formData.append(`conf[${idx}].confType`, spt[0]);
    formData.append(`conf[${idx}].count`, spt[1]);
  })
  return await Axios.post('/room/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data; charset=utf-8'
    }
  })
}