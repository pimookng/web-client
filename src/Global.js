import styled,{css} from "styled-components";
export const globalVar = {
    URL: {
         Server: "http://localhost:5000/"
        //Server:"http://localhost:24970/" //iis run
    },
    Request: {
        Post: {
            Json: {
                method: "post",
                headers: { "Content-Type": "application/json" }
            }
        }
    },
    Request_Post_Json: {
        method: "post",
        headers: { "Content-Type": "application/json" }
    }
}

export const style = {
    // component
    Container: () => {
        return styled.div`
            position: relative;
            width: 100%;
         `},
    Bullet: () => styled.img`
            ${style.css.image.size(16)} 
            `,
    Icon: () => styled.img`
            ${style.css.image.size(48)} 
            `,

    //css
    css: {
        border: {
            topRound: (radius) => {
                return css`
            border-radius: ${radius + 'px'} ${radius + 'px'} 0 0;  
            `}
        },
        image: {
            size: (size) => css`
            width:${size}px;  
            height:${size}px;
            `}
    },

    // //mui
    // mui: () => {
    //     return makeStyles(g.material_ui_core_styles);
    // }
}

// export const style = {
//     // component
//     Container: () => {
//         return styled.div`
//             position: relative;
//             width: 100%;
//          `},
//     Bullet: () => styled.img`
//             ${style.css.image.size(16)} 
//             `,
//     Icon: () => styled.img`
//             ${style.css.image.size(48)} 
//             `,

//     //css
//     css: {
//         border: {
//             topRound: (radius) => {
//                 return css`
//             border-radius: ${radius + 'px'} ${radius + 'px'} 0 0;  
//             `}
//         },
//         image: {
//             size: (size) => css`
//             width:${size}px;  
//             height:${size}px;
//             `}
//     },

//     // //mui
//     // mui: () => {
//     //     return makeStyles(g.material_ui_core_styles);
//     // }
// }