import { useState, useEffect } from "react";

import Customer from 'backoffice/Customer';
import { PostSave, Fetch_List } from 'lib/Http';
function ListCustomer() {

    //== state ==
    const [data, setData] = useState([]);
    //select for edit,delete
    const [selectedRow, setSelectedRow] = useState({
        CustomerCode: "",
        CustomerName: "",
        CompanyName: "",
        Tel: "",
        LineID: "",
        Email: "",
        Province: "",
        ZipCode: "",
        Address: "",
        CustomerID: 0
    })
    const [showModal, setShowModal] = useState(false); //look form

    //== search ==
    const param = {
        CustomerName: "",
        CompanyName: "",
        Tel: "",
        LineID: "",
        Email: "",
        Province: "",
        ZipCode: ""
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
    const OnEdit = (row) => {
        setSelectedRow(row)
        return frmLookup(true)
    }

    const OnDelete = (index) => {
        if (window.confirm('ต้องการลบ ข้อมูล?')) {
            PostSave('Customer/Save', data[index], true)
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

    let ListTable = <p className="text-center">No data</p>
    if (data.length > 0)
        ListTable = <div className="table-responsive">
            <table className='table table-striped container' aria-labelledby="tabelLabel">
                <thead>
                    <tr className="text-center">
                        <th>รหัสลูกค้า</th>
                        <th>ชื่อลูกค้า</th>
                        <th>ชื่อร้านค้า</th>
                        <th>เบอร์โทรติดต่อ</th>
                        <th>Email</th>
                        <th>Line</th>
                        <th>จังหวัด</th>
                        <th>#</th>
                        <th>#</th>
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
                            <td className="text-center">{r.Province}</td>
                            <td className="text-center">
                                <button className="btn btn-primary" data-toggle="modal" data-target="#ModalDialog"
                                    onClick={() => OnEdit(r)}>Edit</button> {" "}
                            </td>
                            <td className="text-center">
                                <button className="btn btn-danger" onClick={() => OnDelete(index)}>Remove</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    const OnSearch = e => {
        e.preventDefault()
        param.CustomerName = e.target['CustomerName'].value
        param.CompanyName = e.target['CompanyName'].value
        param.Tel = e.target['Tel'].value
        param.Email = e.target['Email'].value
        param.LineID = e.target['LineID'].value
        param.Province = e.target['Province'].value
        param.ZipCode = e.target['ZipCode'].value
        List()
    }

    let SearchBar = <div>
        <h3 className="text-center mb-3">ข้อมูลลูกค้า</h3>
        <form onSubmit={OnSearch} className="mb-3">
            <div className="row g-3">
                <div className="col-md-6">
                    <div className="input-group">
                        <label className="input-group-text">ชื่อลูกค้า</label>
                        <input type="text" name="CustomerName" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group">
                        <label className="input-group-text">ชื่อบริษัท</label>
                        <input type="text" name="CompanyName" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="input-group-text">เบอร์โทร</label>
                        <input type="text" name="Tel" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="input-group-text">E-mail</label>
                        <input type="text" name="Email" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <label className="input-group-text">LineID</label>
                        <input type="text" name="LineID" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-4 col-xl-5">
                    <div className="input-group">
                        <label className="input-group-text">จังหวัด</label>
                        <input type="text" name="Province" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-4 col-xl-5">
                    <div className="input-group">
                        <label className="input-group-text">รหัสไปรษณีย์</label>
                        <input type="text" name="ZipCode" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-2 col-xl-1">
                    <button type="submit" className="btn btn-outline-primary form-control">ค้นหา</button>
                </div>
                <div className="col-md-2 col-xl-1">
                    <button type="add" className="btn btn-success form-control" onClick={() => OnEdit(0)}>เพิ่ม</button>
                </div>
            </div>
        </form>
    </div>

    return <div className="container main">
        {SearchBar}
        {ListTable}
        {showModal === true ? <Customer row={selectedRow} isShow={frmLookup} setSelectedRow={setSelectedRow} /> : ''}
    </div>
}

export default ListCustomer;