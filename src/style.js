import styled from 'styled-components';

const getSize=(props)=>{
    switch(props.type){
        case "small": return '100px'; break;
        case "medium": return '200px'; break;
        case "big": return '300px'; break;
        default: return '300px'; break;
    }
}

const getColor=(props)=>{
switch(props.type){
    case "small": return "red"; break;
    case "medium": return "yellow"; break;
    case "big": return "green"; break;
    default: return "whitesmoke"; break;
}
}
export const Box=styled.div`
width:${getSize};
height:${getSize};
border:1px solid black ;
background-color:${getColor} ;
display: ${({display})=>display&&"flex"} ;
`

export const Wrapper=styled.div`
display:flex;
`