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
            <div class="row">
                <div class="col-sm ">
                    <ImgTopRound radius="10" src={image}/> 
                </div>
                <div class="col-sm" >
                    <h5 align="right">{title}&emsp;</h5>
                    <hr />
                    <p align="right">&emsp;&emsp;{detail}</p>
                </div>

            </div>
            <div class="row footer1">
                <div class="col-sm">
                    {/* {Link} */}
                </div>
                <div class="col-sm">
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