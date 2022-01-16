import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
        
    background-color: #FFFFFF;
    border: 2px solid #B4DDC1;
    border-radius: 50px 15px 15px 50px;

    .jogador-img {
        display: flex;
        align-items: center;
        margin-left: 10px;

        img {
            width: 80px;
            height: 80px;
            background-color: #006437;
            border-radius: 50%;
        }
    }

    .jogador-info {  
        margin-left: 6.5px;

        .jogador-container {

            width: 164px;
            
            p:first-of-type {
                font-size: 15px;
                font-weight: bold;
                color: #006437;
            
            }
        
            p:last-of-type {
                font-size: 12px;
                color: #161615;
            }
        }

        .jogador-status {
            width: 158px;
            display: flex;
            align-items: center;

            margin-top: 10px;


            .status-legend {

                p {
                    font-size: 12px;
                    color: #161615;
                }
                
                p:last-of-type {
                    margin-top: 6.5px;
                }
            }

            .status-data {
                font-size: 14px;
                font-weight: bold;
                color: #161615;
                margin-left: 6.5px;
            }
        }
    }

    
`