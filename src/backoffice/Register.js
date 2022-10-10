// import React, { Component,useState } from "react";

function Register(prop) {
    const { row, isShow,setSelectedRow } = prop;

    // const formData = {
    //     txtCustomerName:row.CustomerName,
    //     chkIsCancel:row.IsCancel
    // };

    function onDataChange(event){
        event.preventDefault();
        const{name,value}=event.target;
        const newData={...row};
        newData[name]=value;

        setSelectedRow(newData);

    }

    function onCheckChange(event){
        event.preventDefault();
        const{name,checked}=event.target;
        const newData={...row};
        newData[name]=checked;

        setSelectedRow(newData);

    }

    let modalStyle = {
        display: 'block'
    }

    // let r = row;
    return (

        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">ข้อมูลลงทะเบียน</h5>
                        <button type="button" className="btn-close" onClick={() => isShowModal(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            <span className="modal-lable" >Email:</span>
                            <input type="text" id="CustomerName" name="CustomerName" cols="50" wrap="soft"
                                value={row.CustomerName} onChange={onDataChange} />
                        </p>
                        <p><span className="modal-lable">Reason </span>
                            <textarea id="Reason" name="Reason" cols="50" wrap="soft" 
                            value={row.Reason} onChange={onDataChange}  />
                        </p>
                        <p>
                            <input type="checkbox" id="IsCancel" name="IsCancel" 
                            checked={row.IsCancel} onChange={onCheckChange} /> IsCancel
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={() => isShowModal(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Register;