import deleteData from "./deleteData";
import postData from "./postData";

export default function updateData({urlWithId, article}) {
    const url = global.url
    deleteData(urlWithId);
    postData({url, article});
    return ;
}
