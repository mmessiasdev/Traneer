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

    .desc {
        text-align: justify;
    }

    .initialInfo {
        animation: initialInfo 6s;
        opacity: 0%;
    }

    .initialInfo img {
        opacity: 0%;
    }

    .blurbuttomcont {
        display: none;
    }

    .mobileProject {
        display: none;
    }

    .contentProjects {
        width: 400px;
    }

    .skillsListMobile {
        display: none;
    }
    .mobileHome {
        display: none;
    }  




    /* ---- RESPONSIVE ---- */



    @media (max-width: 960px) {
        .header{
            display: none;
        }
        .curriculum {
            display: none;
        }
        .sizeBannerProjGit{
            width: 150px;
        }

        .initialbuttons {
            width: 100%;
        }

        .homewallpaper {
            width: 100%;
            position: absolute;
        }

        .homewallpaperImg {
            opacity: 50%;
        }
    }

    @media (max-width: 750px) {
        .initialbuttons {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .desktopProject {
            display: none;
        }

        .mobileProject {
            display: flex;
            width: 100%;
            justify-content: center;
        }


        .aboutContent {
            flex-direction: column;
        }

        .aboutName {
            display: flex;
            flex-direction: column;
            padding: 0px;
            width: 100%;
            margin-top: 100px;
        }

        .aboutDesc {
            padding: 0px;
            width: 100%;
        }

        .linkContent {
            flex-direction: column;
            justify-content: center;
        }

        .linkPadding {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px 25px;
        }
    }

    @media (max-width: 600px) {
        .initialbuttons {
            display: none;
        }
        .desktopHome {
            display: none;
        }

        .mobileHome {
            display: flex;
        }  

        .blurbuttomcont {
            display: flex;
        }
        .skillsListDesktop {
            display: none;
        }

        .skillsListMobile {
            display: inline;
        }

    }




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