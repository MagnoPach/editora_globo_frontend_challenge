import styled from 'styled-components';
import bgImage from '../../assets/img-header.jpg'

export const Hero = styled.section`
    #hero {
        width: 100%;
        background: transparent url(${bgImage}) 0% 0% no-repeat padding-box;

        .hero-box {
            width: 84%;
            display: flex;
            justify-content: start;
            padding: 203px 0 115px 0;
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

        @media screen and (max-width: 900px) {
            background-size: cover;


            .hero-box {
                padding: 140px 0 80px 0;
            }

            .hero-title {
                width: 500px;
    
                h1 {
                    font-size: 50px;
                }
    
                p:first-of-type {
                    font-size: 18px;
                    margin-top: 16px;
                }
    
                p:nth-child(3) {
                    font-size: 12px;
                    margin-top: 14px;
                }
    
                p:last-of-type {
                    font-size: 16px;
                    margin-top: 20px;
                }
            }
        }

        @media screen and (max-width: 640px) {
            background-size: cover;

            .hero-box {
                padding: 107px 0 11px 0;
            }

            .hero-title {
                width: 270px;
    
                h1 {
                    width: 209px;
                    font-size: 25px;

                    span {
                        padding: 4px 8px;
                    }
                }
    
                p:first-of-type {
                    font-size: 12px;
                    letter-spacing: 0.38px;
                    margin-top: 10px;
                }
    
                p:nth-child(3) {
                    display: none;
                }
    
                p:last-of-type {
                    display: none;
                }
            }
        }

    }
`