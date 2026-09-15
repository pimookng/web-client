import { PostSave } from "../lib/Http";

function Product(prop){
    const { row, isShow, setSelectedRow } = prop;

    let modalStyle = {
        display: 'block'
    }

    const Edition = [
        {label: 'Standard', value: 'standard'},
        {label: 'Excellent', value: 'excellent'},
        {label: 'Enterprise', value: 'enterprise'}
    ]
    
    const Version = [
        {label: '1.0', value: '1.0'},
        {label: '2.0', value: '2.0'},
        {label: '3.0', value: '3.0'},
        {label: '4.0', value: '4.0'}
    ]

    function onDataChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        const newData = { ...row };
        newData[name] = value;

        setSelectedRow(newData);
    }

    const OnSave = e => {
        e.preventDefault() //prevent default refresh

        PostSave('Product/Save', row)
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
                            <h5 className="modal-title">ข้อมูลสินค้า</h5>
                            <button type="button" className="btn-close" onClick={() => isShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container mb-3">
                                <div className="row g-3">
                                    <div className="col-md-12 mb-2">
                                        <div className="col-md-12 col-lg-6">
                                            <div className="input-group">
                                                <label className="input-group-text">รหัสสินค้า</label>
                                                <input type="text" className="form-control" id="ProductCode" name="ProductCode" value={row.ProductCode} onChange={onDataChange} required></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6 col-xl-6 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">ชื่อโปรแกรม (อังกฤษ)</label>
                                            <input type="text" className="form-control" id="ProductName" name="ProductName" value={row.ProductName} onChange={onDataChange} required></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6 col-xl-6 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">ชื่อโปรแกรม (ไทย)</label>
                                            <input type="text" className="form-control" id="ProductThaiName" name="ProductThaiName" value={row.ProductThaiName} onChange={onDataChange} required></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 mb-2">
                                        <div className='input-group'>
                                            <label className='input-group-text'>Version</label>
                                            <select className='form-select' defaultValue={'DEFAULT'} id="Version" name="Version" value={row.Version} onChange={onDataChange}>
                                                {Version.map((version, index) => (
                                                    <option value={version.value} key={index}>{version.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 mb-2">
                                        <div className='input-group'>
                                            <label className='input-group-text'>Edition</label>
                                            <select className='form-select' defaultValue={'DEFAULT'} id="Edition" name="Edition" value={row.Edition} onChange={onDataChange}>
                                                {Edition.map((edition, index) => (
                                                    <option value={edition.value} key={index}>{edition.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-4 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">ราคา</label>
                                            <input type="text" className="form-control" id="Price" name="Price" value={row.Price} onChange={onDataChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">ImageURL</label>
                                            <input type="text" className="form-control" id="ImageURL" name="ImageURL" value={row.ImageURL} onChange={onDataChange}></input>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">DownloadURL</label>
                                            <input type="text" className="form-control" id="DownloadURL" name="DownloadURL" value={row.DownloadURL} onChange={onDataChange}></input>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 mb-2">
                                        <div className="input-group">
                                            <label className="input-group-text">Description</label>
                                            <textarea type="text" className="form-control" aria-label="With Description" id="Description" name="Description" value={row.Description} onChange={onDataChange}></textarea>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 mb-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="IsShowed" name="IsShowed" checked={row.isShow} onChange={onDataChange}></input>
                                            <label className="form-check-label">IsShow</label>
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

export default Product;