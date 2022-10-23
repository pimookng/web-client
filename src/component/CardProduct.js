import Stock30Detail from "static/product/Stock30Detail";
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import { Button, Col, Container, Row } from "react-bootstrap";

const CardProduct = {
    Main: function Main(props) {
        const { row, OnOpenDetail } = props;
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
        const edition = row.editions.map(item => item).reverse() //std,ex,ent,sql

        let modalStyle = {
            display: 'block'
        }

        function onDownload(url) {
            alert(url)
        }

        let ListEdition = <p>no edition</p>
        let moreDetail =()=>{
            if (row.ProductVersionName==="Stock  3.0"){
                return <Stock30Detail/>
            }
            else {
                return <p>yyyy</p>
            }
        }
        if (edition.length > 0)
            ListEdition = (
                <div>
                    <Row lg={2} xl={3} style={{display: 'flex', alignContent: 'center'}}>                    
                        {edition.map
                            (r =>
                                <div>
                                    <Card className="text-center">
                                        <Card.Header>
                                            <Card.Title>
                                                {r.edition}
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Text className="card-title pricing-card-title">
                                                ราคา {r.price} บาท
                                            </Card.Text>
                                            <Button variant="primary">Download</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </Row>
                    {moreDetail()}
                </div>
                
                // <div>
                //     <table>
                //         <tr>
                //             {
                //                 edition.map(r =>
                //                     <td border='1px'>
                //                         <span>
                //                             <h3>
                //                                 <span className="modal-lable" >{r.edition}</span>
                //                             </h3>
                //                             <p>
                //                                 <span className="modal-lable" >ราคา {r.price} บาท</span>
                //                             </p>
                //                             <button type="button" onClick={() => onDownload(r.downloadURL)} data-bs-dismiss="modal" aria-label="Download">Download</button>
                //                         </span>

                //                     </td>
                //                 )}
                //         </tr>
                //     </table>
                //     {moreDetail()}
                // </div>
            )

        return (
            <Modal show={isShow} onHide={()=>isShow(false)} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {row.ProductVersionName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {ListEdition}
                    </Container>
                </Modal.Body>
            </Modal>
            // <div className="modal show fade" style={modalStyle}>
            //     <div className="modal-dialog " role="document">
            //         <div className="modal-content">
            //             <div className="modal-header" >
            //                 <h5 className="modal-title">{row.ProductVersionName}</h5>
            //             </div>
            //             <div className="modal-body">
            //                 {ListEdition}
            //             </div>
            //             <div className="modal-footer">
            //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
            //                     onClick={() => isShow(false)}>ปิด</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}
export default CardProduct;