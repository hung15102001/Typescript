import axios from "axios";

export const upload = async (file: string) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset","tsllkbbb");
  const {data} = await axios.post('https://api.cloudinary.com/v1_1/cornyhung/image/upload', formData);
  console.log(data);
  return data.url;
}