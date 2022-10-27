import ListFeature from "component/ListProductFeature"
import UIExample from "component/ProductUIExample"

const CardProduct = {
    Main: function Main(props) {
        const { row, OnOpenDetail } = props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img className="img-fluid" src={row.ImageURL} onClick={() => OnOpenDetail(row)} alt='เลือกโปรแกรม'/>
                    </div>
                    <div className="col-md-8 text-center border">
                    </div>
                </div>
                
                {/* <p>{row.ProductVersionName}</p>
                <span>{row.Description}</span> */}
            </div>
        )

    },

    Detail: function Detail(props) {
        const { row, isShow } = props;
        const edition = row.editions.map(item => item).reverse() //std,ex,ent,sql

        // const edition =row.editions
        let modalStyle = {
            display: 'block'
        }

        function onDownload(url) {
            alert(url)
        }

        let ListEdition = <p>no edition</p>
        let moreDetail = () => {
            if (row.ProductName === 'Stock'){
                return <ListFeature.Stock/>
            }
            else if (row.ProductName === 'Car Service'){
                return <ListFeature.CarService/>
            }
            else if (row.ProductName === 'Account'){
                return <ListFeature.Account/>
            }
        }

        if (edition.length > 0)
            ListEdition = (
                <div>
                    <div>
                        <div className="container py-3">
                            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                                {edition.map
                                    (r =>
                                        <div className="col col-xs-12 col-md-6 mx-auto">
                                            <div className="card mb-4 shadow-sm text-center">
                                                <div className="card-header py-3">
                                                    <h4 className="my-0 fw-normal">{r.edition}</h4>
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title pricing-card-title"><small class="text-muted fw-light"> ราคา</small> {r.price} <small class="text-muted fw-light"> บาท</small></h4>
                                                    <button type="button" class="w-100 btn btn-lg btn-primary">Download</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">

                        </div>
                    </div>

                    {moreDetail()}
                </div>
            )

        return (
            <div className="modal fade show modal-lg" role="dialog" aria-hidden="true" tabindex="-1" style={modalStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{row.ProductVersionName}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => isShow(false)}></button>
                        </div>
                        <div className="modal-body">
                            {ListEdition}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardProduct;