import styled from 'styled-components';
import bgImage from '../../assets/img-header.jpg'

export const Main = styled.main`
    #hero {
        witdh: 100%;
        height: 842px;
        background: transparent url(${bgImage}) 0% 0% no-repeat padding-box;

        .hero-box {
            width: 1260px;
            display: flex;
            justify-content: start;
            padding-top: 203px;
            margin: 0 auto;
        }

        .hero-title {
            width: 500px;

            h1 {
                color: #FFFFFF;
                font-size: 60px;
                font-weight: bold;
                letter-spacing: 1.5px;
                
                span {
                    background-color: #006437;
                    padding: 4px 12px;
                }
            }

            p:first-of-type {
                color: #B4DDC1;
                font-size: 20px;
                font-weight: normal;
                letter-spacing: 0.5px;

                margin-top: 20px;
            }

            p:nth-child(3) {
                color: #D5D5D5;
                font-family: Arial, sans-serif;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 0px;

                margin-top: 15px;
            }

            p:last-of-type {
                color: #FFFFFF;
                font-family: Arial, sans-serif;
                font-size: 19px;
                font-weight: normal;

                margin-top: 20px;
            }
        }
    }


`