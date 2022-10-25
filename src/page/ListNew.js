import Accusoft from "component/Accusoft";


function ListNews(){

    function detail(){
        return(
<div>
        {/* <news></news>  */}
<h3>new 1</h3>
<h3>new 2</h3>
<h3>new 3</h3>

</div>

        )
    }
    return(
        <div class="mx-auto" style={{ width: "80%" }}>
            <Accusoft.Box title="ข่าวล่าสุด" detail={detail()}/>
        {/* <Accusoft.Box Title="What New" Detail={Detail()} /> */}
        </div>
    )
}

export default ListNews;