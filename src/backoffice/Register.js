
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
        PostSave('Register/Save', row)
            .then((result) => { //success
                if (result === "") {
                    isShow(false); //close modal   
                }
                else
                    alert(result); //error
            })
    }

    return (
        <form class="was-validated" onSubmit={OnSave}>
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content container">
                        <div className="modal-header">
                            <h5 className="modal-title">ข้อมูลลงทะเบียน</h5>
                            <button type="button" className="btn-close" onClick={() => isShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p class="row">
                                <span className="modal-lable">Serial Number</span>
                                <input type="text" id="SerialNo" name="SerialNo" cols="50" wrap="soft" class="bg-secondary text-white border border-dark"
                                    value={row.SerialNo} readonly="readonly" />
                            </p>
                            <p class="row">
                                <span className="modal-lable col">RegisterID</span>
                                <p class="col-1"></p>
                                <span className="modal-lable col">วันที่ลงทะเบียน</span>
                            </p>
                            <p class="row">
                                <input type="text" id="RegisterID" name="RegisterID" cols="50" wrap="soft" class="bg-secondary text-white col border border-dark"
                                    value={row.RegisterID} readonly="readonly" />
                                <p class="col-1"></p>
                                <input type="text" id="Date" name="Date" cols="50" wrap="soft" class="bg-secondary text-white col border border-dark"
                                    value={row.Date} readonly="readonly" />
                            </p>
                            <p class="row">
                                <span className="modal-lable col">เวอร์ชั่นโปรแกรม</span>
                                <p class="col-1"></p>
                                <span className="modal-lable col-4">License</span>

                            </p>
                            <p class="row">
                                <input type="text" id="ProductName" name="ProductName" cols="50" wrap="soft" class="bg-secondary text-white col border border-dark"
                                    value={row.ProductName} readonly="readonly" />
                                <p class="col-1"></p>
                                <input type="text" id="License" name="License" cols="50" wrap="soft" class="bg-secondary text-white col-4 border border-dark"
                                    value={row.License} readonly="readonly" />
                            </p>
                            <p class="row">
                                <span className="modal-lable col">ชื่อบริษัท</span>
                                <p class="col-1"></p>
                                <span className="modal-lable col">รหัสผู้ลงทะเบียน</span>
                            </p>
                            <p class="row">
                                <input type="text" id="CompanyName" name="CompanyName" cols="50" wrap="soft" class="col border border-dark"
                                    value={row.CompanyName} onChange={onDataChange} />
                                <p class="col-1"></p>
                                <input type="text" id="CustomerCode" name="CustomerCode" cols="50" wrap="soft" class="col border border-dark"
                                    value={row.CustomerCode} onChange={onDataChange} />
                            </p>
                            <p class="row">
                                <span className="modal-lable" >ชื่อผู้ลงทะเบียน:</span>
                                <input class="form-control is-invalid" type="text" id="CustomerName" name="CustomerName" cols="50" wrap="soft"
                                    value={row.CustomerName} onChange={onDataChange} required />
                            </p>
                            <p class="row">
                                <span className="modal-lable col">เลขบัตรประชาชน</span>
                                <p class="col-1"></p>
                                <span className="modal-lable col">เบอร์โทรติดต่อ</span>
                            </p>
                            <p class="row">
                                <input type="text" id="CardID" name="CardID" cols="50" wrap="soft" class="col border border-dark"
                                    value={row.CardID} onChange={onDataChange} />
                                <p class="col-1"></p>
                                <input type="text" id="Tel" name="Tel" cols="50" wrap="soft" class="col border border-dark"
                                    value={row.Tel} onChange={onDataChange} />
                            </p>
                            <p class="row">
                                <span className="modal-lable col">Email</span>
                                <span className="modal-lable col">LineID</span>
                            </p>
                            <p class="row">
                                <input type="text" id="Email" name="Email" cols="50" wrap="soft" class="col border border-dark"
                                    value={row.Email} onChange={onDataChange} />
                                <p class="col-1"></p>
                                <input type="text" id="LineID" name="LineID" cols="50" wrap="soft" class="col border border-dark"
                                    value={row.LineID} onChange={onDataChange} />
                            </p>
                            <p class="row">
                                <span className="modal-lable">หมายเหตุ</span>
                                <textarea id="Reason" name="Reason" cols="50" wrap="soft"
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