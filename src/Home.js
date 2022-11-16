import ListNews from "page/ListNew";
import ListVDO from "page/ListVDO";
import MainPromotion from "page/MainPromotion";
import NewPromotion from "page/NewsPromotion";
import styled from "styled-components";
import { style } from "Global"
// import SideMenu from "component/SideMenu";

var v = require("Variable.json");
const Container = style.Container();
const Flex = styled.div`
            position: relative;
            display: flex;
         `

const Row = styled(Flex)`
            width: 100%;
            flex-direction: row;     
         `

const Column = styled(Flex)`
            
            flex-direction: column;
         `
let Bullet = style.Bullet();

function Home() {
    var i = JSON.parse(JSON.stringify(v.Image.svg));

    return (
        <Container className="main">
            <Row>
                <Column>
                    {/* <div>
                        <input type="checkbox" id="checkbox"></input>
                        <header className="SideHeader">
                            <label htmlFor="checkbox">
                                <i id="navbtn" className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </header>
                        <SideMenu />
                    </div> */}

                </Column>
                <Column>
                    <NewPromotion/>
                    <MainPromotion />
                </Column>
                <Column>
                    <Row>
                        <Column><Bullet src={i.Next}></Bullet></Column>
                        <Column>
                            <ListNews />
                            <br />
                            <ListVDO />
                        </Column>
                    </Row>

                </Column>
            </Row>

        </Container>

        // <div class="container" role="main">
        //     <div class="row">
        //         <div class="col-sm-8">
        //             <div >
        //                 {/* <MainNews /> */}
        //                 <MainPromotion />
        //             </div>
        //         </div>
        //         <div class="col-sm-4">
        //             <div class="row"><ListNews /></div>
        //             <br/>
        //             <div class="row"><ListVDO/></div>
        //         </div>
        //     </div>
        // </div>
    )

}

export default Home;