import { useState, useEffect } from "react";

import Customer from 'backoffice/Customer';
import { PostSave, Fetch_List } from 'lib/Http';
import { Row } from "react-bootstrap";
function ListCustomer() {

    //== state ==
    const [data, setData] = useState([]);
    //select for edit,delete
    const [selectedRow, setSelectedRow] = useState({
        
    })
    const [showModal, setShowModal] = useState(false); //look form

    //== search ==
    const param = {

    }

    function List() {
        Fetch_List('Customer/List', param)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }

    const frmLookup = (IsShowed) => {
        if (IsShowed === false)
            List() //refresh data after edit

        setShowModal(IsShowed)
    }

    //== edit,delete ==
    const OnEdit = (Row) => {
        setSelectedRow(Row)
        return frmLookup(true)
    }

    const OnDelete = (index) => {
        if (window.confirm('ต้องการลบ ข้อมูล?')) {
            PostSave('Register/Save', data[index], true)
                .then((result) => {
                    if (result === "") { //delete success
                        const newData = { ...data }
                        newData.slice(index, 1) //remove array
                        setData(newData); //refresh data
                    }
                    else
                        alert(result);//error from server

                })
                .catch(err => console.log(err))
        }
    }

    let ListTable = <p>No data</p>
    if (data.length > 0)
        ListTable = <div>
            <table className='table table-striped container' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>รหัสลูกค้า</th>
                        <th>ชื่อลูกค้า</th>
                        <th>ชื่อร้านค้า</th>
                        <th>เบอร์โทรติดต่อ</th>
                        <th>Email</th>
                        <th>Line</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((r, index) =>
                        <tr key={index}>
                            <td>{r.CustomerCode}</td>
                            <td>{r.CustomerName}</td>
                            <td>{r.CompanyName}</td>
                            <td>{r.Tel}</td>
                            <td>{r.Email}</td>
                            <td>{r.LineID}</td>

                            <td>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#ModalDialog"
                                    onClick={() => OnEdit(r)}>edit</button> {" "}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    const OnSearch = e => {
        e.preventDefault()

        List()
    }

    let SearchBar = <div>
        <h3 style={{ textAlign: "center" }}>ข้อมูลูกค้า</h3>
        <form onSubmit={OnSearch} class="needs-validation container" noValidate>
            <div>
                <button type="submit">ค้นหา</button>
            </div>
        </form>
    </div>

    return <div>
        {SearchBar}
        {ListTable}
        {showModal === true ? <Customer row={selectedRow} isShow={frmLookup} setSelectedRow={setSelectedRow} /> : ''}
    </div>
}

export default ListCustomer;