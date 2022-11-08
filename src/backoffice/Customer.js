import { PostSave } from "lib/Http";

function Customer(prop) {
    const { row, isShow, setSelectedRow } = prop;

    let modalStyle = {
        display: 'block'
    }
    
    function onDataChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        const newData = { ...row };
        newData[name] = value;

        setSelectedRow(newData);
    }

    const OnSave = e => {
        e.preventDefault() //prevent default refresh

        PostSave('Customer/Save', row)
            .then((result) => { //success
                if(result === ""){
                    isShow(false); //close modal
                }
                else
                    alert(result); //error
            })
    }

    return (
        <form className="was-validated" onSubmit={OnSave}>
            <div className="modal modal-xl show fade" style={modalStyle}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content container">
                        <div className="modal-header">
                            <h5 className="modal-title">ข้อมูลลูกค้า</h5>
                            <button type="button" className="btn-close" onClick={() => isShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container mb-3">
                                <div className="row g-3">
                                    <div className="col-sm-12 col-lg-4 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">รหัสลูกค้า</label>
                                            <input type="text" className="form-control" id="CustomerCode" name="CustomerCode" value={row.CustomerCode} onChange={onDataChange} required></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-8 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">ชื่อลูกค้า</label>
                                            <input type="text" className="form-control" id="CustomerName" name="CustomerName" value={row.CustomerName} onChange={onDataChange} required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">ชื่อบริษัท</label>
                                            <input type="text" className="form-control" id="CompanyName" name="CompanyName" value={row.CompanyName} onChange={onDataChange} required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">ที่อยู่</label>
                                            <textarea className="form-control" aria-label="With Address" id="Address" name="Address" value={row.Address} onChange={onDataChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">จังหวัด</label>
                                            <input type="text" className="form-control" id="Province" name="Province" value={row.Province} onChange={onDataChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">รหัสไปรษณีย์</label>
                                            <input type="text" className="form-control" id="ZipCode" name="ZipCode" value={row.ZipCode} onChange={onDataChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">เบอร์โทรติดต่อ</label>
                                            <input type="text" className="form-control" id="floatingTel" name="Tel" value={row.Tel} onChange={onDataChange} required></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">LineID</label>
                                            <input type="text" className="form-control" id="floatingLineID" name="LineID" value={row.LineID} onChange={onDataChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">Email</label>
                                            <input type="email" className="form-control" id="floatingEmail" name="Email" placeholder="Email" value={row.Email} onChange={onDataChange} required></input>
                                        </div>
                                    </div>

                                </div>
                            </div>                            
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={() => isShow(false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Customer;