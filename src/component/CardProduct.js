import ListFeature from "component/ListProductFeature"
import Carousel from "component/Carousel"
import Example from "../json/PictureExample"

const CardProduct = {
    Main: function Main(props) {
        const { row, OnOpenDetail } = props;
        return (
            <div>
                <div className="row py-4 mb-1">
                    <div className="col-md-4 text-center">
                        <img className="img-fluid mb-4" src={row.ImageURL} onClick={() => OnOpenDetail(row)} alt='เลือกโปรแกรม' />
                    </div>
                    <div className="col-md-8 rounded-3 border shadow-lg">
                        <div>
                            <div className="col-12">
                                <h5 className="p-2">{row.ProductVersionName}</h5>
                            </div>
                            <div className="col-md-12">
                                <div className="p-4">
                                    <p>{row.Description}</p>
                                </div>
                                <div className="text-center text-md-end mb-3">
                                    <button className="btn btn-outline-secondary" type="button" onClick={() => OnOpenDetail(row)}>More Info.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    },

    Detail: function Detail(props) {
        const { row, isShow } = props
        const edition = row.editions.map(item => item).reverse() //std,ex,ent,sql
        
        let data = Example.Stock
        if (row.ProductName === 'Stock') {
            data = Example.Stock
        }
        else if (row.ProductName === 'Car Service') {
            data = Example.CarService
        }
        else if (row.ProductName === 'Account') {
            data = Example.Account
        }

        let modalStyle = {
            display: 'block'
        }

        function onDownload(url) {
            alert(url)
        }

        let ListEdition = <p>no edition</p>
        let moreDetail = () => {
            if (row.ProductName === 'Stock') {
                return <ListFeature.Stock />
            }
            else if (row.ProductName === 'Car Service') {
                return <ListFeature.CarService />
            }
            else if (row.ProductName === 'Account') {
                return <ListFeature.Account />
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
                                                    <h4 className="my-0 fw-normal text-uppercase">{r.edition}</h4>
                                                </div>
                                                <div className="card-body">
                                                    <h4 className="card-title pricing-card-title"><small className="text-muted fw-light"> ราคา</small> {r.price} <small className="text-muted fw-light"> บาท</small></h4>
                                                    <button type="button" className="w-100 btn btn-lg btn-primary">Download</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="p-2 mb-4 bg-light rounded-2 border">
                        <div className="container">
                            <div className="col-12">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" width={'100%'} height={'500px'} src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 mb-4 rounded-2 border">
                        <Carousel.ExampleUI data={data}></Carousel.ExampleUI>
                    </div>

                    {moreDetail()}
                </div>
            )

        return (
            <div className="modal fade show modal-lg " role="dialog" aria-hidden="true" tabindex="-1" style={modalStyle}>
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