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
                    <img src={Image} class="d-block w-100" width={Width} height={Height} preserveAspectRatio="xMidYMid slice" focusable="false" />
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
    },

    ExampleUI: function ExampleUI(props) {
        const { data } = props;
        return (
            <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {data.map((d, index) => (
                        <div className={`carousel-item ${index === 0 ? "active" : ""}`}>

                            <div className="container">
                                <div className="col">
                                    <img src={d.Path} className="d-block w-100" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>{d.Caption}</h1>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previouse</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default carousel;