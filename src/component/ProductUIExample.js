import { Carousel } from "react-bootstrap"

function UIExample(props) {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src = "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide Label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src = "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide Label</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src = "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="First slide"/>
                <Carousel.Caption>
                    <h3>First slide Label</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default UIExample;