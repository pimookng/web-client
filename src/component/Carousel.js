const carousel = {
    Main: function Main(props) {
        const { UseLink, Active, Image, Height, Width, Link, Title } = props;

        let Carousel = <div></div>
        if (UseLink) {
            if (Active) {
                Carousel = <div class="carousel-item active">
                    <a href={Link} target="_blank"><img src={Image} class="d-block w-100" width={Width} height={Height} /></a>
                </div>
            }
            else {
                Carousel = <div class="carousel-item">
                    <a href={Link} target="_blank"><img src={Image} class="d-block w-100" width={Width} height={Height} /></a>
                </div>
            }
        }
        else {
            if (Active) {
                Carousel = <div class="carousel-item active">
                    <img src={Image} class="d-block w-100" width={Width} height={Height} />
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>{Title}</h1>
                        </div>
                    </div>
                </div>
            }
            else {
                Carousel = <div class="carousel-item">
                    <img src={Image} class="d-block w-100" width={Width} height={Height} />
                    <div class="container">
                        <div class="carousel-caption">
                            <h1>{Title}</h1>
                        </div>
                    </div>
                </div>
            }
        }

        return (
            <div>
                {Carousel}
            </div>
        )
    }
}

export default carousel;