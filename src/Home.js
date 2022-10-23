import ListNews from "page/ListNew";
import ListVDO from "page/ListVDO";
import MainPromotion from "page/MainPromotion";

function Home(){
        return(
            <div class="container" role="main">
                <div class="row">
                    <div class="col-sm-8">
                        <div >
                            {/* <MainNews /> */}
                            <MainPromotion />
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="row"><ListNews /></div>
                        <br/>
                        <div class="row"><ListVDO/></div>
                    </div>
                </div>
            </div>
        )

}

export default Home;