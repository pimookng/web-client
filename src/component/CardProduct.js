import Stock30Detail from "static/product/Stock30Detail";

const CardProduct = {
    Main: function Main(props) {
        const { row, OnOpenDetail } = props;

        // const groupEdition={
        //     edition:"",
        //     price:0,
        //     downloadURL:""
        // }

        return (
            <div>
                <img src={row.ImageURL} onClick={() => OnOpenDetail(row)} alt='เลือกโปรแกรม' />

                <p>{row.ProductVersionName}</p>
                <span>{row.Description}</span>

            </div>
        )

    },

    Detail: function Detail(props) {
        const { row, isShow } = props;
        const edition = row.editions.map(item => item).reverse()

        // const edition =row.editions
        let modalStyle = {
            display: 'block'
        }

        function onDownload(url) {
            alert(url)
        }

        let ListEdition = <p>no edition</p>
        let moreDetail =()=>{
            if(row.ProductVersionName==="Stock  3.0"){
                return <Stock30Detail/>
            }
            else{
                return <p>yyy</p>
            }
        }
        if (edition.length > 0)
            ListEdition = (
                <div>
                    <table>
                        <tr>
                            {

                                edition.map(r =>
                                    <td border='1px'>
                                        <span>

                                            <h3>
                                                <span className="modal-lable" >{r.edition}</span>
                                            </h3>
                                            <p>
                                                <span className="modal-lable" >ราคา {r.price} บาท</span>
                                            </p>
                                            <button type="button" onClick={() => onDownload(r.downloadURL)} data-bs-dismiss="modal" aria-label="Download">Download</button>
                                        </span>

                                    </td>
                                )}
                        </tr>
                    </table>
                    {moreDetail()}



                </div>

            )



        return (
            <div className="modal show fade" style={modalStyle}>
                <div className="modal-dialog " role="document">
                    <div className="modal-content">
                        <div className="modal-header" >
                            <h5 className="modal-title">{row.ProductVersionName}</h5>
                        </div>
                        <div className="modal-body">
                            {ListEdition}
                            {/* <h3>
                            <span className="modal-lable" >{edition[0].edition}</span>
                        </h3>
                        <p>
                            <span className="modal-lable" >ราคา {edition[0].price} บาท</span>
                        </p>
                        <button type="button" onClick={() => onDownload(edition[0].downloadURL)} data-bs-dismiss="modal" aria-label="Download">Download</button> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                onClick={() => isShow(false)}>ปิด</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }


}
export default CardProduct;