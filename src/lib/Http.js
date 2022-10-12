import { globalVar } from 'Global'

let g = globalVar;

//add,edit,delete row
export const PostSave = (path, data, isDeleted) => {
    if (isDeleted)
        data.RowState = "delete"

    g.Request_Post_Json.body = JSON.stringify(data)
    return Fetch(path, g.Request_Post_Json)

    //original
    // const res = await fetch(g.URL.Server + path, {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body:'',//data is object  
    // });
}

export const Fetch_List = (path, param) => {
    g.Request.Post.Json.body = JSON.stringify(param)
    return Fetch(path, g.Request.Post.Json);

    //original
    // const res = await fetch(g.URL.Server + path, {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(param),//data is object  
    // });

    //return await res.json();
}

const Fetch = async (path, req) => {
    const res = await fetch(g.URL.Server + path, req);
    return await res.json();
}