import { Fetch_List } from "lib/Http";
import { useState, useEffect } from "react";
import CardProduct from 'component/CardProduct'

function ListProduct() {
    // let productTest = {
    //     productVersionName: "",
    //     productThaiName: "",
    //     version: "",
    //     edition: {
    //         edition: "",
    //         ImageURL: "",
    //         price: 0
    //     }
    // }

    const [products, setProduct] = useState([])
    // const [editions, setEdition] = useState([])
    const [selectProduct, setSelectProduct] = useState(products)

    const [showModal, setShowModal] = useState(false) //lookup form

    function List() {
        Fetch_List('Product/List', { isShowed: true })
            .then(res => {
                // productTest=res;
                setProduct(res)
            }) //success set state to data
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if (products.length === 0){
            List()
        }

    },)

    const frmLookup=(isShowed)=>{
        // const detail = rowProduct.edition
        setShowModal(isShowed)
    }

    const OnOpenDetail = (row) => {       
        setSelectProduct(row)
        frmLookup(true)
    }

    let ListTable = ''
    if (products.length > 0)
        ListTable = (
            <div>
                    {products.map((r, index) => //r is row
                        <CardProduct.Main key={index} row={r} OnOpenDetail={OnOpenDetail}/>
                    )}
                    <hr/>
            </div>
        )
        
    return (
        <div>
            <h3 style={{ textAlign: "center" }}>โปรแกรมธุรกิจ SME</h3>
            {ListTable}            
            {showModal === true ? <CardProduct.Detail row={selectProduct} isShow={frmLookup} /> : ''}
        </div>
    )
}

export default ListProduct;