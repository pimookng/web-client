import { Table } from "react-bootstrap";


const ListFeature = {
    Stock: function feature() {
        return (
            <div>
                <h2 className="display-6 text-center mb-4">Feature List</h2>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th width={'10%'}>Standard</th>
                            <th width={'10%'}>Excellent</th>
                            <th width={'10%'}>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan={4}>ซื้อ - ขายสินค้าหน้าร้าน</th>
                        </tr>
                        <tr>
                            <td>ซื้อสินค้า - ขายสินค้า</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>วางบิลเก็บเงิน (ใบส่งของยังไม่ชำระเงิน)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    },

    CarService: function feature() {
        return <></>
    },

    Account: function feature() {
        return <></>
    }
}

export default ListFeature;