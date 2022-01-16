import styled from 'styled-components';

export const Container = styled.div`
    width: 356px;
    height: 364px;
    background-color: #FFFFFF;
    border: 2px solid #B4DDC1;
    border-radius: 80px 15px 15px 15px;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    padding-top: 26px;

    .container-status{
        width: 110px;

        .jogador-img {
            display: flex;
            flex-direction: column;
            align-items: center;
    
            img {
                width: 100px;
                height: 100px;
                background-color: #006437;
                border-radius: 50%;
            }
        }
    
        .jogador-info { 
            width: 100%;
    
            .jogador-container {
                margin-top: 5px;

                p {
                    font-size: 13px;
                    letter-spacing: 0.61px;
                    text-align: center;
                    color: #161615;
                }

                p:first-of-type {
                    font-weight: bold;
                }
            }
    
            .jogador-status {
                width: 100%;
                display: flex;
                flex-direction: column-reverse;
                align-items: center;
    
                margin-top: 10px;
    
    
                .status-legend {
                    display: flex;
                    align-items: center;
                    margin-top: 6px;
                    p {
                        font-size: 12px;
                        color: #161615;
                    }
                    
                    p:last-of-type {
                        margin-left: 16px;
                    }
                }
    
                .status-data {
                    width: 100%;
                    font-size: 14px;
                    font-weight: bold;
                    color: #161615;
                    margin-left: 6.5px;
                }
            }
        }
    }

    .container-texto {

        .text-titulo {
            font-size: 20px;
            letter-spacing: 0.64px;
            font-weight: bold;
            color: #006437;
        }

        .texto-box {
            width: 178px;
            height: 216px;
            overflow: auto;
            padding-right: 4px;
            font-size: 13px;
            line-height: 18px;
            letter-spacing: 0.61px;
            margin-top: 22px;
        }

    }

    
`

