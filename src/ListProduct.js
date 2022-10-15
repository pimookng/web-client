import { Fetch_List } from "lib/Http";
import { useState, useEffect } from "react";
import CardProduct from 'component/CardProduct'
function ListProduct() {
    const product = {
        productName: "",
        productThaiName: "",
        version: "",
        isShowed: true
    }
    const groupEdition={
        edition:"",
        price:0,
        downloadURL:""
    }
    const [data, setData] = useState([])
    const [selectProduct, setSelectProduct] = useState(product)

    function List() {
        Fetch_List('Product/List', product)
            .then(res => setData(res)) //success set state to data
            .catch(err => console.log(err));
    }

    useEffect(() => {
        List()
    },)

    let ListTable = ''
    if (data.length > 0)
        ListTable = (
            <div>
                <table className='table table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>ProductName</th>
                            <th>ProductThaiName</th>
                            <th>Version</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((r, index) => //r is row
                         <CardProduct.Main row={r}></CardProduct.Main> 
                            // <tr key={index}>                                
                            //     <td>{r.ProductName}</td>
                            //     <td>{r.ProductThaiName}</td>
                            //     <td>{r.Version}</td>                                
                            // </tr>
                        )}

                    </tbody>
                </table>
            </div>
        )

    return (
        <div>
            <h3 style={{ textAlign: "center" }}>โปรแกรมธุรกิจ SME</h3>
            {ListTable}
        </div>


    )
}

export default ListProduct;