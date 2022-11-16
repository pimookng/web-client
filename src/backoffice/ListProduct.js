import { PostSave, Fetch_List } from 'lib/Http';
import { useState } from 'react';
import Product from './Product';
function ListProduct() {

    //== state ==
    const [data, setData] = useState([]);
    //select for edit,delete
    const [selectedRow, setSelectedRow] = useState({
        ProductCode : '',
        ProductName : '',
        Edition : '',
        Version : ''
    })

    const [showModal, setShowModal] = useState(false); //look form

    //== search ==
    const param = {
        ProductFullName : '',
        Edition : '',
        Version : ''
    }

    function List() {
        Fetch_List('Product/ListBO', param)
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
            PostSave('Product/Save', data[index], true)
                .then((result) => {
                    if (result === "") { //delete success
                        const newData = { ...data }
                        newData.slice(index, 1) //remove array
                        setData(newData) //refresh data
                    }
                    else
                    alert(result) //error from server
                })
                .catch(err => console.log(err))
        }
    }

    const Edition = [
        {label: 'ทั้งหมด', value: ''},
        {label: 'Standard', value: 'Standard'},
        {label: 'Excellent', value: 'Excellent'},
        {label: 'Enterprise', value: 'Enterprise'}
    ]
    
    const Version = [
        {label: 'ทั้งหมด', value: ''},
        {label: '1.0', value: '1.0'},
        {label: '2.0', value: '2.0'},
        {label: '3.0', value: '3.0'},
        {label: '4.0', value: '4.0'}
    ]

    let ListTable = <p className='text-center'>No data</p>
    if (data.length > 0)
        ListTable = <div className='table-responsive'>
            <table className='table table-striped container' aria-labelledby='tabelLabel'>
                <thead>
                    <tr className='text-center'>
                        <th>รหัสสินค้า</th>
                        <th>ชื่อโปรแกรม</th>
                        <th>Version</th>
                        <th>Edition</th>
                        <th>#</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((r, index) =>
                        <tr key={index}>
                            <td className='text-center'>{r.ProductCode}</td>
                            <td>{r.ProductFullName}</td>
                            <td className='text-center'>{r.Version}</td>
                            <td className='text-center text-capitalize'>{r.Edition}</td>
                            <td className='text-center'>
                                <button className='btn btn-primary' data-toggle='modal' data-target='#ModalDialog'
                                    onClick={() => OnEdit(r)}>Edit</button> {' '}
                            </td>
                            <td className='text-center'>
                                <button className="btn btn-danger" onClick={() => OnDelete(index)}>Remove</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    const OnSearch = e => {
        e.preventDefault()
        param.ProductFullName = e.target['ProductFullName'].value
        param.Edition = e.target['Edition'].value
        param.Version = e.target['Version'].value
        List()
    }
    let SearchBar = (
        <form className='mb-3' onSubmit={OnSearch}>
            <div className='row g-3'>
                <div className='col-md-12 col-lg-4 col-xl-6'>
                    <div className='input-group'>
                        <label className='input-group-text'>โปรแกรม</label>
                        <input type='text' name='ProductFullName' className='form-control'></input>
                    </div>
                </div>
                <div className='col-md-4 col-lg-3 col-xl-2'>
                    <div className='input-group'>
                        <label className='input-group-text'>Version</label>
                        <select className='form-select' name='Version' defaultValue={'DEFAULT'}>
                            {Version.map((version, index) => (
                                <option value={version.value} key={index}>{version.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='col-md-4 col-lg-3 col-xl-2'>
                    <div className='input-group'>
                        <label className='input-group-text'>Edition</label>
                        <select className='form-select' name='Edition' defaultValue={'DEFAULT'}>
                            {Edition.map((edition, index) => (
                                <option value={edition.value} key={index}>{edition.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='col-md-2 col-lg-1'>
                    <button type='submit' className='btn btn-outline-primary form-control'>ค้นหา</button>
                </div>
                <div className='col-md-2 col-lg-1'>
                    <button type='add' className='btn btn-success form-control' onClick={() => OnEdit(0)}>เพิ่ม</button>
                </div>
            </div>
        </form>
    )
    return (
        <div className='container main'>
            <h3 className='text-center'>ข้อมูลสินค้า</h3>
            {SearchBar}
            {ListTable}
            {showModal === true ? <Product row={selectedRow} isShow={frmLookup} setSelectedRow ={setSelectedRow} testboolean={false}/> : ''}
        </div>
    )
}

export default ListProduct;