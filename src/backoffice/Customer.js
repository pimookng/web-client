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
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content container">
                        <div className="modal-header">
                            <h5 className="modal-title">ข้อมูลลูกค้า</h5>
                            <button type="button" className="btn-close" onClick={() => isShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container mb-3">
                                <div className="row g-3">
                                    <div className="col-md-4">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingCustomerCode" name="CustomerCode" placeholder="รหัสลูกค้า" value={row.CustomerCode} onChange={onDataChange}></input>
                                            <label for="floatingCustomerCode">รหัสลูกค้า</label>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingCustomerName" name="CustomerName" placeholder="ชื่อลูกค้า" value={row.CustomerName} onChange={onDataChange} required></input>
                                            <label for="floatingCustomerName">ชื่อลูกค้า</label>
                                            <div className="invalid-feedback">กรุณากรอกชื่อลูกค้า</div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingCompanyName" name="CompanyName" placeholder="ชื่อบริษัท" value={row.CompanyName} onChange={onDataChange} required></input>
                                            <label for="floatingCompanyName">ชื่อบริษัท</label>
                                            <div className="invalid-feedback">กรุณากรอกชื่อบริษัท</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingTel" name="Tel" placeholder="เบอร์โทรติดต่อ" value={row.Tel} onChange={onDataChange} required></input>
                                            <label for="floatingTel">เบอร์โทรติดต่อ</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="floatingLineID" name="LineID" placeholder="LineID" value={row.LineID} onChange={onDataChange}></input>
                                            <label for="floatingLineID">LineID</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="floatingEmail" name="Email" placeholder="Email" value={row.Email} onChange={onDataChange}></input>
                                            <label for="floatingEmail">Email</label>
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