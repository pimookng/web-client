
// import React, {useState,useEffect } from "react";
import { g } from "../GlobalVar";

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


        
//== SaveData ==
const OnSave =async e => {
    e.preventDefault()
    const response = await fetch(g.URL_Server+'Register/Save', {

        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(row)        
    });
    const result = await response.json();
    if (result === "") {
        isShow(false); //save complete
    }
    else {
        console.log(result); //error
        alert(result);
    }
}
// const OnSave =async e => {
//     e.preventDefault()
//     const response = await fetch(g.URL_Server+'Register/Save', {

//         method: "post",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(row)        
//     });
//     const result = await response.json();
//     if (result === "") {
//         isShow(false); //save complete
//     }
//     else {
//         console.log(result); //error
//         alert(result);
//     }
// }

    return (

        <div className="modal show fade" style={modalStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">ข้อมูลลงทะเบียน</h5>
                        <button type="button" className="btn-close" onClick={() => isShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
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
                        <button type="button" className="btn btn-primary"
                            onClick={OnSave}>Save</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                            onClick={() => isShow(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Register;