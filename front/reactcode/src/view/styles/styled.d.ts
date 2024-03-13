import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme{
        title: string,
        colors: {
            primary: string,
            secundary: string,
            terciary: string,
            fourth: string,
            background: string,
            secundaryback: string,
            text: string,
        }
    }
}