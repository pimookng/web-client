import Accusoft from "component/Accusoft";

function ListVDO(){

    const Detail = () => (
        <div>
            
            <iframe title="สต๊อกสินค้า" width="100%" height="100%" style={{ border: "2px solid lightgray" }} src="https://www.youtube.com/embed/tbXX5HFraUM" allowFullScreen/>     
            <p align="center">โปรแกรมสต๊อกสินค้า 2.0</p>
            <br/>
            <iframe title="ศูนย์ซ่อมรถ" width="100%" height="100%" src="https://www.youtube.com/embed/tbXX5HFraUM" />
            <p align="center">โปรแกรมศูนย์ซ่อมรถ 3.0</p>
        </div>
    )

return(
    <div className="mx-auto" style={{ width: "90%" }}>
    <Accusoft.Box title="สอนการใช้งาน" fontSize="" detail={Detail()} />
</div>
)
}

export default ListVDO;
