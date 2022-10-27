const ListFeature = {
    Stock: function feature() {
        return (
            <div>
                <h2 className="display-6 text-center mb-4">Feature List</h2>
                <div className="table-responsive">
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th width={'70%'}>#</th>
                                <th width={'10%'}>Standard</th>
                                <th width={'10%'}>Excellent</th>
                                <th width={'10%'}>Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="text-start" colSpan={4}>ซื้อ - ขายสินค้าหน้าร้าน</th>
                            </tr>
                            <tr scope="row">
                                <td className="text-start">ซื้อสินค้า - ขายสินค้า</td>
                                <td>•</td>
                                <td>•</td>
                                <td>•</td>
                            </tr>
                            <tr>
                                <td className="text-start">วางบิลเก็บเงิน (ใบส่งของยังไม่ชำระเงิน)</td>
                                <td>•</td>
                                <td>•</td>
                                <td>•</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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