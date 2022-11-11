import Carousel from "component/Carousel";

function NewsPromotion() {

    const detail = () => {
        return (
            <div>
                <Carousel.Main
                    UseLink={true}
                    Active={true} // need only 1 Active
                    Image={process.env.PUBLIC_URL + '/Image/Test.jpg'} //local file in publci folder
                    Height="345"
                    // Width=""
                    Link="https://shopee.co.th/accusoft"
                    // Title=""
                />
                <Carousel.Main
                    UseLink={true}
                    Active={false}
                    Image="https://img.freepik.com/free-photo/vietnam-background-nature-china-tropical-falls_1417-1355.jpg?w=1380&t=st=1667985778~exp=1667986378~hmac=6bd3657c0d4a2514abe8414dd0758c9c1a3c5cb54e49fcd226806331eb6ab759"
                    Height="345"
                    // Width=""
                    Link="https://www.lazada.co.th/shop/accusoft"
                    // Title=""
                />
            </div>
        )
    }

    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {detail()}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default NewsPromotion;