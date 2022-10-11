import { g } from '../GlobalVar'

export default class Http {

}

//add,edit,delete row
export const PostSave = (path, data, isDeleted) => {
    if (isDeleted)
        data.RowState = "delete"

    const res = fetch(g.URL_Server + path, {

        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),//data is object  
    });

    return res.json();
}