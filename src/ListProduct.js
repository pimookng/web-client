import { Fetch_List } from "lib/Http";
import { useState, useEffect } from "react";
import CardProduct from './component/CardProduct'
import Accusoft from "./component/Accusoft";
import ListCustomer from "./component/ListCustomer"

function ListProduct() {

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

    const frmLookup = (isShowed) => {
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
            </div>
        )
    
        const Detail = () => (
            <div>
                <div className="container py-4">
                    <div className="p-4 py-1 mb-4 bg-light rounded-3">
                        <div className="container-fluid">
                            {ListTable}                        
                        </div>
                    </div>
                </div>
                
                
                {showModal === true ? <CardProduct.Detail row={selectProduct} isShow={frmLookup}/> : ''}
            </div>
        )
    return (
        <div className="container main">
            <Accusoft.Box title="โปรแกรมธุรกิจ SME" detail={Detail()} />
            {/* <ListCustomer></ListCustomer> */}
        </div>
        
    )
}

export default ListProduct;