import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* ---- GLOBAL ---- */


    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
    }
    div{
        overflow-x: hidden;
    }




    // /* ---- RESPONSIVE ---- */



    // @media (max-width: 960px) {

    // }

    // @media (max-width: 880px) {
    //     .responsiveLoginPage{
    //         display: flex;
    //     }
    //     .loginPage{
    //         display: none;
    //     }
    //     .homePage{
    //         display: none;
    //     }
    //     .responsiveHomePage{
    //         display: inline;
    //     }
    // }

    // @media (max-width: 600px) {
    //     .responsiveLoginPage{
    //         width: 100%;
    //     }

    // }




    /* ---- ANIMATIONS ---- */


    @keyframes initialInfo {
        0% {
            opacity: 100%;
        }

        80% {
            opacity: 100%;
        }

        95% {
            opacity: 0%;
        }

    }

    @keyframes opacity {
        0% {
            opacity: 0%;
            transform: scale(1);
        }

        3% {
            opacity: 20%;
        }

        80% {
            opacity: 20%;
        }

        95% {
            opacity: 0%;
            transform: scale(1.5);

        }

    }


`