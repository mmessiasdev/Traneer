import styled, { Props } from "styled-components";

export const DefaultHeader = styled.div<Props>`
    width: 100%;
    height: 65px;
    background-color: ${p => p.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: ${p => p.justify};
    padding: 20px 50px;
`