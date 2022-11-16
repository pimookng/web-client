import Accusoft from "component/Accusoft"
import { style } from "Global"
import styled, { css } from 'styled-components';

const TopRoundBox = styled.div`
border: 1px solid #e0e4e3;
${(props) => {return style.css.border.topRound(props.radius)} }   
`
const ImgTopRound = styled.img`
padding: 5px;
${(props) => {return style.css.border.topRound(props.radius)} } 
`


const Promotion = {

    Main: function Main(props) {
        const {title,image,detail,priceText}=props;

        return (
            <TopRoundBox radius="10">
                <div className="container">
                    <ImgTopRound radius="10" src={image} />
                </div>
                {/* <div className="row">
                    <div className="col-md">
                        <ImgTopRound radius="10" src={image}/> 
                    </div>
                    <div className="col-md" >
                        <h5 align="right">{title}&emsp;</h5>
                        <hr />
                        <p align="right">&emsp;&emsp;{detail}</p>
                    </div>

                </div> */}
                <div className="row footer1">
                    <div className="col-md">
                        {/* {Link} */}
                    </div>
                    <div className="col-md">
                        <h5 align="right" >{priceText}</h5>
                    </div>
                </div>
            </TopRoundBox >

        )
    },

    Detail: function Detail() {
        return (
            <div>
                <h1>Main Promotion</h1>
            </div>
        )
    }

}

export default Promotion;