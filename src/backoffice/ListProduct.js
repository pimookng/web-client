function ListProduct() {

    const Edition = ["Standard","Excellent","Enterprise"]
    const Version = ["1.0","2.0","3.0","4.0"]
    let SearchBar = (
        <form className="mb-3">
            <div className="row g-3">
                <div className="col-md-5">
                    <div className="input-group">
                        <label className="input-group-text">ชื่อโปรแกรม</label>
                        <input type="text" name="ProductName" className="form-control"></input>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="input-group">
                        <label className="input-group-text">Version</label>
                        <select className="form-select">
                            <option value={''} selected>Choose...</option>
                            {Version.map((version) => (
                                <option value={version}>{version}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="input-group">
                        <label className="input-group-text">Edition</label>
                        <select className="form-select">
                            <option value={''} selected>Choose...</option>
                            {Edition.map((edition) => (
                                <option value={edition}>{edition}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="col-md-2">
                    <button type="submit" className="btn btn-outline-primary form-control">ค้นหา</button>
                </div>
            </div>
        </form>
    )
    return (
        <div className="container">
            <h3 className="text-center">ข้อมูลสินค้า</h3>
            {SearchBar}
        </div>
    )
}

export default ListProduct;