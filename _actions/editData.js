import { deleteData } from "./deleteData";

export const editData = async (item,setFormData) => {
    setFormData({
      link: item.link,
      siteName: item.siteName,
      username: item.username,
      password: item.password
    });
    await deleteData(item._id);
  };