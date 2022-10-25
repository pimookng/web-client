import Promotion from "component/Promotion"
import Accusoft from "component/Accusoft"

function MainPromotion() {

    const detail = () => {
        return (

            <div>
                <Promotion.Main
                    image="http://www.accusoft.co.th/Images/Promotion/Main%20Standart.png"
                    title="ชุดประหยัด standard"
                    detail="เหมาะกับลูกค้าต้องการประหยัดงบ โปรแกรมใช้งานง่าย พร้อมอุปกรณ์ ชุดประหยัด ไม่ยุ่งยาก ติดตั้งใช้งานได้เลย"
                    priceText="เริ่มต้นที่ 2,250 บาท"
                />
                <br />
                <Promotion.Main
                    image="http://www.accusoft.co.th/Images/Promotion/Main%20Standart.png"
                    title="ชุดคุ้มค่า Excellent"
                    detail="เหมาะกับลูกค้าต้องการประหยัดงบ โปรแกรมใช้งานง่าย พร้อมอุปกรณ์ ชุดประหยัด   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ไม่ยุ่งยาก ติดตั้งใช้งานได้เลย"
                    priceText="เริ่มต้นที่ 5,900 บาท"
                />
            </div>
        )

    }
    return (
        <div>
            <Accusoft.Box
                title="Promotion ซื้อ Software + อุปกรณ์ POS"
                fontSize="24"
                detail={detail()}
            />
            <br />


        </div>

    )

}

export default MainPromotion;