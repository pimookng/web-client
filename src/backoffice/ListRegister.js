import { useState, useEffect } from "react";

import Register from 'backoffice/Register';
import { PostSave, Fetch_List } from 'lib/Http'
function ListRegister() {
    
    //== state ==
    const [data, setData] = useState([])
    //select for edit,delete
    const [selectedRow, setSelectedRow] = useState({
        CustomerName: "",
        Reason: "",
        IsCancel: false
    })
    const [showModal, setShowModal] = useState(false) //lookup form

    //replace componentDidMount
    useEffect(() => { List(); },)

    //== search ==
    const param = {
        SerialNo: '',
        CustomerName: '',
        CustomerID: 0
    };

    function List() {
        Fetch_List('Register/List', param)
            .then(res => setData(res)) //success set state to data
            .catch(err => console.log(err));
    }

    //== edit,delete ==
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
                        newData.slice(index, 1) //remove array
                        setData(newData); //refresh page
                    }
                    else 
                        alert(result);//error from server

                })
                .catch(err=>console.log(err))
        }
    }

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