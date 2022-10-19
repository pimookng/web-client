import { Stack } from "react-bootstrap";

function Stock30Detail(){
return(
    <div>
        <Stack direction="horizontal" gap={3}>
            <p>Detail</p>
            <p className="ms-auto">Standard</p>
            <p>Excellent</p>
            <p>Enterprise</p>
        </Stack>

        <Stack direction="horizontal" gap={3}>
            <p>1</p>
            <p className="ms-auto">2</p>
            <p>3</p>
            <p>4</p>
        </Stack>
    </div>
)
}
export default Stock30Detail;