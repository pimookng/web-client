import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ListFeature from "component/ListProductFeature"
import UIExample from "component/ProductUIExample"

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
        const edition = row.editions.map(item => item).reverse()

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
                    <Row lg={2} xl={3}>                    
                        {edition.map
                            (r =>
                                <Col md={6} lg={4} className='mx-auto'>
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
                                    <br />
                                </Col>                                
                            )
                        }
                    </Row>
                    <UIExample/>                
                    {moreDetail()}
                </div>
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
        )
    }
}
export default CardProduct;