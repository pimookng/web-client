import { PostSave } from "lib/Http";

function Customer(prop) {
    const { row, isShow, setSelectedRow } = prop;

    function onDataChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        const newData = { ...row };
        newData[name] = value;

        setSelectedRow(newData);
    }

    let modalStyle = {
        display: 'block'
    }

    return (
        <form class="was-validated">
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content container">
                        <div className="modal-header">
                            <h5 className="modal-title">ข้อมูลลูกค้า</h5>
                            <button type="button" className="btn-close" onClick={() => isShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div class="row">
                                <span class="col-3">รหัสลูกค้า</span>
                                <span class="col">ชื่อลูกค้า</span>
                            </div>
                            <div class="row">
                                <input type="text" id="CustomerCode" name="CustomerCode" cols="50" wrap="soft" class="col-3"
                                    value={row.CustomerCode} />
                                <input type="text" id="CustomerName" name="CustomerName" cols="50" wrap="soft" class="col"
                                    value={row.CustomerName} />
                            </div><p />
                            <div class="row">
                                <span>ชื่อร้านค้า</span>
                                <input type="text" id="CompanyName" name="CompanyName" cols="50" wrap="soft" class="col"
                                    value={row.CompanyName} />
                            </div><p />
                            <div class="row">
                                <span>เบอร์โทรติดต่อ</span>
                                <input type="text" id="Tel" name="Tel" cols="50" wrap="soft" class="col"
                                    value={row.Tel} />
                            </div><p />
                            <div class="row">
                                <span>Email</span>
                                <input type="text" id="Email" name="Email" cols="50" wrap="soft" class="col"
                                    value={row.Email} />
                            </div><p />
                            <div class="row">
                                <span>Line</span>
                                <input type="text" id="LineID" name="LineID" cols="50" wrap="soft" class="col"
                                    value={row.LineID} />
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