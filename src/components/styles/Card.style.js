import styled from "styled-components";

export const StyleCard = styled.div`

    display:flex;
    justify-content:space-between;
    flex-direction:${ ( { layout } ) => layout || 'row' };
    padding:1.5rem;
        div:first-child{
            width:40%;
        }
        img{
            width:450px
        }
`