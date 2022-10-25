import Accusoft from "component/Accusoft";

function ListVDO(){

    const Detail = () => (
        <div>
            
            <iframe title="สต๊อกสินค้า" width="100%" height="100%" style={{ border: "2px solid lightgray" }} src="https://www.youtube.com/embed/tbXX5HFraUM" allowfullscreen="allowfullscreen"/>     
            <h6 align="center">โปรแกรมสต๊อกสินค้า 2.0</h6>
            <br/>
            <iframe title="ศูนย์ซ่อมรถ" width="100%" height="100%" src="https://www.youtube.com/embed/tbXX5HFraUM" />
            <h5 align="center">โปรแกรมศูนย์ซ่อมรถ 3.0</h5>
        </div>
    )

return(
    <div class="mx-auto" style={{ width: "80%" }}>
    <Accusoft.Box title="สอนการใช้งาน" fontSize="24" detail={Detail()} />
</div>
)
}

export default ListVDO;
