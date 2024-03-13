import styled, { Props } from "styled-components";

    
export const PrimaryInput = styled.input<Props>`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    padding: 15px;
    color: ${p => p.theme.colors.secundary};
    font-size: 20px;
`