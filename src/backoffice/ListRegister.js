import React, { Component } from "react";
import { g } from "../GlobalVar"
export class ListRegister extends Component {

    //== component ==
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true,
            selectedIndex: 0
        }
    }

    // List() {

    //     fetch(g.URL_Server + 'Register/List')
    //         .then(res => res.json())
    //         .then(result => {
    //             this.setState({ data: result, loading: false });
    //         })
    // }

    async List() {

        const response = await fetch(g.URL_Server+'Register/List', {

            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.param)
        });
        const result = await response.json();

        this.setState({ data: result, loading: false });
    }

    param = {
        SerialNo: '',
        CustomerName: '',
        CustomerID: 0
    };

    componentDidMount() {
        this.List();
    }

    //== searching ==
    frmSearch = () => {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1>การลงทะเบียน</h1>
                </div>
                <form onSubmit={this.OnSearch}>
                    <label>SerialNo:</label><input type="text" name="txtSerialNo" />
                    <label>Email:</label><input type="text" name="txtCustomerName" />
                    <button type="submit">ค้นหา</button>
                </form>
            </div>
        )
    }

    OnSearch = e => {
        e.preventDefault()

        this.param.SerialNo = e.target['txtSerialNo'].value
        this.param.CustomerName = e.target['txtCustomerName'].value
        this.param.CustomerID = 0;
        this.List()
    }

    //== render ==
    render() {

        let ListTable = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTable();

        //main render
        return (
            <div>
                {this.frmSearch()}
                {ListTable}
            </div>
        );
    }

    renderTable = () => {
        const data = this.state.data
        return (<div>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>IsCancel</th>
                        <th>SerialNo</th>
                        <th>RegisterID</th>
                        <th>ProductName</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Reason</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((r, index) => //r is row
                        <tr key={index}>
                            <td><input type="checkbox" name="chkIsCancel" disabled checked={r.IsCancel} /></td>
                            <td>{r.SerialNo}</td>
                            <td>{r.RegisterID}</td>
                            <td>{r.ProductName}</td>
                            <td>{r.CustomerName}</td>
                            <td>{r.Date}</td>
                            <td>{r.Reason}</td>

                            <td>
                                <button className="btn btn-primary" data-toggle="modal" data-target="#ModalDialog"
                                    onClick={() => this.OnEdit(index)}>edit</button> {" "}
                                <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/*for modal dialog*/}
            {/* {this.renderModal()} */}

        </div>
        );
    }
}