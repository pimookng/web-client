import styled from "styled-components";
import { style } from "Global"

//` called is backtick, alt+96
const Container = style.Container();
const Header = styled.div`
            position: relative;
            display: flex;
         `

const HeaderRow = styled(Header)`
            width: 100%;
            flex-direction: row;     
         `

const HeaderColumn = styled(Header)`
            background: #F00;
            flex-direction: column;
         `

const HeaderText = styled(HeaderColumn)`
         border-top-left-radius: 20px;
         min-width: 40%;
         max-width: 80%;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
         color: #FFF;
          font-size: ${(props) => { return (props.fontSize + 'px') }}
       `

const HeaderAngle = styled(HeaderColumn)`
clip - path: polygon(0 100, 100 % 100 %, 0 % 100 %);
// min - width: 10 %;
// max - width: 20 %;
border: solid #F00 1px;
`

const Detail = styled.div`
    position: relative;
    padding: 10px;
    background: #FFF;
    border: solid #F00 1px;
    border-top: solid #F00 5px;
 `

const Accusoft = {


    Box: function Box(props) {
        const { title, fontSize, detail } = props

        return (
            <div>
                <Container>
                    <HeaderRow>
                        <HeaderText fontSize={fontSize}>&nbsp;&nbsp;{title}</HeaderText>
                        <HeaderAngle />
                    </HeaderRow>

                    <Detail>
                        {detail}
                    </Detail>
                </Container>
            </div>




            // <Container>
            //     <HeaderRow>
            //         <HeaderText FontSize={fontSize} >
            //             &nbsp;&nbsp;{title}
            //         </HeaderText>
            //         <HeaderAngle />
            //     </HeaderRow>

            //     {/* <Detail>
            //         {props.Detail}
            //     </Detail> */}
            // </Container>
        );
    }
}

export default Accusoft;