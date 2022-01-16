import styled from 'styled-components';

export const Container = styled.div`
    & {
        width: 100%;
       height: 111px;
       display: flex;
       align-items: flex-end;
       justify-content: space-evenly;
       border-bottom: 1px solid #006437;

       .jogos-container {
           width: 25px;
           height: 100px;
           display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            text-align: center;

       }

       .gols-container {
            width: 25px;
            height: 46px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            text-align: center;

       }
    }
`

export const VerticaltatusBar = styled.div`
    && {
        width: 100%;
        height: ${props => props.width}%;
        background-color: ${props => props.color};
    }
`