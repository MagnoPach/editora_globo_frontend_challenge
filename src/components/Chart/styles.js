import styled from 'styled-components';

export const Container = styled.div`
    & {
       height: 42px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       justify-content: space-evenly;
       border-left: 1px solid #006437;

       .jogos-container {
           width: 100px;
           height: 15px;
           display: flex;
       }

       .gols-container {
            width: 46px;
            height: 15px;
            display: flex;
       }
    }
`

export const JogosBar = styled.div`
    && {
        width: ${props => props.width}%;
        height: 100%;
        background-color: ${props => props.color};
        margin-right: 4px;
    }
`