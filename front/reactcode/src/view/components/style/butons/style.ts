import styled, { Props } from "styled-components";

export const PrimaryButtom = styled.button<Props>`
    width: 100%;
    height: 50px;
    background: ${p => p.theme.colors.secundary};
    text-decoration: none;
    border: none;
    font-size: 25px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
`