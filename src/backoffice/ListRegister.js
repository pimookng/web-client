import React, { useState, useEffect } from "react";
import { g } from "../GlobalVar";
import Register from './Register';
import { PostSave } from '../lib/Http'
function ListRegister() {

    const [selectedRow, setSelectedRow] = useState({
        CustomerName: "",
        Reason: "",
        IsCancel: false
    })

    const [data, setData] = useState([])

    const [showModal, setShowModal] = useState(false)


    const OnEdit = (row) => {
        setSelectedRow(row)
        return setShowModal(true)
    }

    const OnDelete = (index) => {
        if (window.confirm('ต้องการลบ ข้อมูล?')) {
            PostSave('Register/Save', data[index], true)
                .then((result) => { 
                    if (result === "") { //delete success
                        const newData = { ...data }
                        newData.slice(index, 1)
                        setData(newData); //refresh page
                    }
                    else  //error
                        alert(result);

                })
        }
    }

    const param = {
        SerialNo: '',
        CustomerName: '',
        CustomerID: 0
    };

    async function List() {
        const res = await fetch(g.URL_Server + 'Register/List', {

            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(param)
        })
        res.json()
            .then(res => setData(res))
            .catch(err => console.log(err));
    }

    //replace componentDidMount
    useEffect(() => { List(); },)

    return <div>
        <h5>ข้อมูลลงทะเบียน</h5>
        <div>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>IsCancel</th>
                        <th>SerialNo1</th>
                        <th>RegisterID</th>
                        <th>ProductName</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {Items} */}
                    {data.map((r, index) => //r is row
                        <tr key={index}>
                            <td><input type="checkbox" name="chkIsCancel" disabled checked={r.IsCancel} /></td>
                            <td>{r.SerialNo}</td>
                            <td>{r.RegisterID}</td>
                            <td>{r.ProductName}</td>
                            <td>{r.CustomerName}</td>
                            <td>{r.Date}</td>
                            <td>{r.Reason}</td>

                            <td>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#ModalDialog"
                                    onClick={() => OnEdit(r)}>edit</button> {" "}
                                <button className="btn btn-danger" onClick={() => OnDelete(index)}>remove</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

        {/* edit */}
        {showModal === true ? <Register row={selectedRow} isShow={setShowModal} setSelectedRow={setSelectedRow} /> : ''}
    </div>

}

export default ListRegister;