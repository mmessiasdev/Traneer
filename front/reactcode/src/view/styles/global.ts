import { Props, createGlobalStyle } from 'styled-components';

export default createGlobalStyle<Props>`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    *::-webkit-scrollbar {
    /* height: 1px; */
    width: 5px;
    height: 8px;
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secundary};
        border-radius: 10px;
    }
    *::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.background};
    }

    body{
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: 'Montserrat';
        transition: .5s;
        overflow-x: hidden;
    }
    h1{
        font-size: 60px;
        color: ${props => props.theme.colors.text};
        text-align: center;
        background-color: transparent;
        width: min-content;
    }
    .initialInfo {
        text-align: start;
    }
    h2{
        font-size: 40px;
        font-weight: 300;
        background-color: transparent;
        color: ${props => props.theme.colors.text};
    }
    h3{
        font-size: 25px;
        font-weight: bold;
        background-color: transparent;
        color: ${props => props.theme.colors.text};
    }
    h4{
        font-size: 20px;
        background-color: transparent;
        font-weight: normal;
        color: ${props => props.theme.colors.text};
    }
    h5{
        font-size: 15px;
        background-color: transparent;
        font-weight: bold;
        color: ${props => props.theme.colors.text};
    }
    h6{
        font-size: 100px;
        position: absolute; 
        background-color: transparent;
        font-weight: lighter;
        opacity: 10%;
        width: 400px;
        text-align: start;
        overflow: hidden;
        color: ${props => props.theme.colors.text};
    }
    p{
        margin-top: 10px;
        background-color: transparent;
        text-align: start;
    }
    a{
        text-decoration: none;
        background-color: transparent;
        color: ${props => props.theme.colors.text};
    }
    .imageObj{
        object-fit: cover;
    }
    .gradient{
        -webkit-mask-image: linear-gradient(to right, transparent 0%, ${p => p.theme.colors.terciary} 100%);
    }

    
    @media (max-width: 350px) {
        h1{
            font-size: 40px;
            color: ${props => props.theme.colors.text}; 
            text-align: center;
        }
    }

`