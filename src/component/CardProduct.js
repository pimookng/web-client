import { Component } from "react"

const CardProduct = {
    Main: function Main(props) {
        const {row}=props;

        const groupEdition={
            edition:"",
            price:0,
            downloadURL:""
        }
        let p=row
            return (
                <div>
                    <h2>
                        x{row.ProductName}
                    </h2>
                </div>
            )

    }


}
export default CardProduct;