
import { PostSave } from 'lib/Http'

function Register(prop) {
    const { row, isShow, setSelectedRow } = prop;

    function onDataChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        const newData = { ...row };
        newData[name] = value;

        setSelectedRow(newData);
    }


    function onCheckChange(event) {
        event.preventDefault();
        const { name, checked } = event.target;
        const newData = { ...row };
        newData[name] = checked;

        setSelectedRow(newData);
    }

    let modalStyle = {
        display: 'block'
    }

    //== SaveData ==
    const OnSave = e => {
        e.preventDefault() //prevent default refresh

        if (!ValidateData(e)) {
            PostSave('Register/Save', row)
                .then((result) => { //success
                    if (result === "") {
                        isShow(false); //close modal   
                    }
                    else
                        alert(result); //error
                })
        }
        else
            alert("กรุณากรอกข้อมูลให้ครบ")
    }

    function ValidateData(e) {
        if (e.target.CustomerName.value === '')
            return false

        if (e.target.IsCancel.checked === false)
            return false

        if (e.target.Reason.value === '')
            return false
    }

    return (
        <form class="was-validated" onSubmit={OnSave}>
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">ข้อมูลลงทะเบียน</h5>
                            <button type="button" className="btn-close" onClick={() => isShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                <span className="modal-lable">Serial Number</span>
                                <input type="text" id="SerialNo" name="SerialNo" cols="50" wrap="soft"
                                    value={row.SerialNo} readonly = "readonly"/>
                            </p>
                            <p>
                                <span className="modal-lable">RegisterID</span>
                                <input type="text" id="RegisterID" name="RegisterID" cols="50" wrap="soft"
                                    value={row.RegisterID} readonly = "readonly"/>
                            </p>
                            <p>
                                <span className="modal-lable">เวอร์ชั่นโปรแกรม</span>
                                <input type="text" id="ProductName" name="ProductName" cols="50" wrap="soft"
                                    value={row.ProductName} readonly = "readonly"/>
                            </p>
                            <p>
                                <span className="modal-lable">วันที่ลงทะเบียน</span>
                                <input type="text" id="Date" name="Date" cols="50" wrap="soft"
                                    value={row.Date} readonly = "readonly"/>
                            </p>
                            <p>
                                <span className="modal-lable">License</span>
                                <input type="text" id="License" name="License" cols="50" wrap="soft"
                                    value={row.License} readonly = "readonly"/>
                            </p>
                            <p>
                                <span className="modal-lable" >ชื่อผู้ลงทะเบียน:</span>
                                <input class="form-control is-invalid" type="text" id="CustomerName" name="CustomerName" cols="50" wrap="soft"
                                    value={row.CustomerName} onChange={onDataChange} required />
                            </p>
                            <p>
                                <span className="modal-lable">เลขบัตรประชาชน</span>
                                <input type="text" id="CardID" name="CardID" cols="50" wrap="soft"
                                    value={row.CardID}/>
                            </p>
                            <p>
                                <span className="modal-lable">เบอร์โทรติดต่อ</span>
                                <input type="text" id="Tel" name="Tel" cols="50" wrap="soft"
                                    value={row.Tel}/>
                            </p>
                            <p>
                                <span className="modal-lable">Email</span>
                                <input type="text" id="Email" name="Email" cols="50" wrap="soft"
                                    value={row.Email}/>
                            </p>
                            <p>
                                <span className="modal-lable">LineID</span>
                                <input type="text" id="LineID" name="LineID" cols="50" wrap="soft"
                                    value={row.LineID}/>
                            </p>
                            <p><span className="modal-lable">หมายเหตุ</span>
                                <textarea  id="Reason" name="Reason" cols="50" wrap="soft"
                                    value={row.Reason} onChange={onDataChange} />
                            </p>
                            <p>
                                <input type="checkbox" id="IsCancel" name="IsCancel"
                                    checked={row.IsCancel} onChange={onCheckChange} /> IsCancel
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary"
                            // onClick={OnSave}
                            >Save</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={() => isShow(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Register;