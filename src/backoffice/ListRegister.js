import { useState, useEffect } from "react";

import Register from 'backoffice/Register';
import { PostSave, Fetch_List } from 'lib/Http'
function ListRegister() {

    //== state ==
    const [data, setData] = useState([])
    //select for edit,delete
    const [selectedRow, setSelectedRow] = useState({
        CompanyName: "",
        CustomerCode: "",
        CustomerName: "",
        CardID: "",
        Tel: "",
        Email: "",
        LineID: "",
        Reason: "",
        IsCancel: false
    })
    const [showModal, setShowModal] = useState(false) //lookup form

    //replace componentDidMount
    // useEffect(() => {
    //List()
    // },)

    //== search ==
    const param = {
        SerialNo: '',
        ProductName: '',
        Version: '',
        Edition: '',
        CustomerName: '',
        chkDate: false,
        dtpStart: Date.now.value,
        dtpEnd: Date.now.value,
        CustomerID: 0
    };

    function List() {
        Fetch_List('Register/List', param)
            .then(res => setData(res)) //success set state to data
            .catch(err => console.log(err));
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



    let ListTable = <p>no data</p>
    if (data.length > 0)
        ListTable = <div>
            <table className='table table-striped container' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>IsCancel</th>
                        <th>SerialNo1</th>
                        <th>RegisterID</th>
                        <th>ProductName</th>
                        <th>ชื่อผู้ลงทะเบียน</th>
                        <th>Date</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
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

    const OnSearch = e => {
        e.preventDefault()

        param.SerialNo = e.target['txtSerialNo'].value
        param.ProductName = e.target['txtProductName'].value
        param.Version = e.target['txtVersion'].value
        param.Edition = e.target['txtEdition'].value
        param.CustomerName = e.target['txtCustomerName'].value
        param.chkDate = e.target['chkDate'].checked
        param.dtpStart = e.target['dtpStart'].value
        param.dtpEnd = e.target['dtpEnd'].value
        param.CustomerID = 0;
        List()
    }

    let SearchBar = <div>
        <h3 style={{ textAlign: "center" }}>ข้อมูลลงทะเบียน</h3>
        {/* <form onSubmit={OnSearch} class="needs-validation" noValidate>
            <label>SerialNo:</label><input type="text" name="txtSerialNo" />
            <label>ชื่อโปรแกรม : </label><input type="text" name="txtProductName" />
            <label>Version : </label><input type="text" name="txtVersion" />
            <label>Edition : </label><input type="text" name="txtEdition" />
            <label>ชื่อผู้ลงทะเบียน :</label><input type="text" name="txtCustomerName" required />
            <input type="checkbox" name="chkDate" /><label>ช่วงวันที่ : </label>
            <input type='date'name="dtpStart"/>
            <input type='date'name="dtpEnd"/>
            <button type="submit">ค้นหา</button>
        </form> */}
        <form onSubmit={OnSearch} class="needs-validation container" noValidate>
            <div class="row">
                <label class="col-1">SerialNo</label>
                <input class="col" type="text" name="txtSerialNo" />
                <label class="col-1">ชื่อโปรแกรม</label>
                <input class="col" type="text" name="txtProductName" />
                <label class="col-1">Version</label>
                <input class="col" type="text" name="txtVersion" />
                <label class="col-1">Edition</label>
                <input class="col" type="text" name="txtEdition" />
            </div>
            <p></p>
            <div class="row">
                <label class="col-1">ผู้ลงทะเบียน</label>
                <input class="col-2" type="text" name="txtCustomerName" />
                <div class="col-1">
                    <input type="checkbox" name="chkDate" /><label>ช่วงวันที่ : </label>
                </div>
                <div class="col">
                    <input type='date' name="dtpStart" />
                    <input type='date' name="dtpEnd" />
                    <button type="submit">ค้นหา</button>
                </div>
            </div>
        </form>
    </div>

    return <div>
        {SearchBar}
        {ListTable}
        {/* edit */}
        {showModal === true ? <Register row={selectedRow} isShow={frmLookup} setSelectedRow={setSelectedRow} /> : ''}
    </div >

}

export default ListRegister;