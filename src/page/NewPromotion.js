function NewPromotion() {


    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://img.freepik.com/free-photo/waterfall-clean-tourist-blue-flow-asian_1417-1350.jpg?w=1380&t=st=1667985715~exp=1667986315~hmac=8209e1adc5547fc540e669cdfbb3ebf297d3f85054e1a04ca06efcae12699a91" class="d-block w-100" width="460" height="345" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://img.freepik.com/free-photo/vietnam-background-nature-china-tropical-falls_1417-1355.jpg?w=1380&t=st=1667985778~exp=1667986378~hmac=6bd3657c0d4a2514abe8414dd0758c9c1a3c5cb54e49fcd226806331eb6ab759" class="d-block w-100" width="460" height="345" alt="..." />
                </div>
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

export default NewPromotion;