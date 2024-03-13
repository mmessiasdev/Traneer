import styled, { Props } from "styled-components"


export const Container = styled.div<Props>`
    width: ${p => p.width}; 
    display: ${p => p.disp};
    justify-content: ${p => p.justify};
    align-items: ${p => p.aligh};
    height: ${p => p.height};
    padding: ${p => p.pad};
    z-index: ${p => p.index};
    flex-direction: ${p => p.direc};
    overflow: ${p => p.overflow};
    border-radius: ${p => p.radius};
    position: ${p => p.posit};
    opacity: ${p => p.opacity};
    left: ${p => p.left};
    margin: ${p => p.margin};
    background-color: ${p => p.color};
    max-width: ${p => p.mwidth};
    min-height: ${p => p.mheight};
    max-height: ${p => p.maxheight};
`

export const ContainerPrimColor = styled.div<Props>`
    width: ${p => p.width}; 
    display: ${p => p.disp};
    justify-content: ${p => p.justify};
    align-items: ${p => p.aligh};
    height: ${p => p.height};
    padding: ${p => p.pad};
    z-index: ${p => p.index};
    flex-direction: ${p => p.direc};
    overflow: ${p => p.overflow};
    border-radius: ${p => p.radius};
    position: ${p => p.posit};
    opacity: ${p => p.opacity};
    left: ${p => p.left};
    margin: ${p => p.margin};
    background-color: ${p => p.theme.colors.primary};
    max-width: ${p => p.mwidth};
    backdrop-filter: blur(${p => p.blur});
`

export const ContainerHeader = styled.div`
    height: 60px;
    display: flex;
    background-color: ${props => props.theme.colors.secundary};
    align-items: center;
    justify-content: space-around;
    padding: 0 30px;
    z-index: 100;
    border-radius: 15px 0px 0px 15px;
    position: fixed;
    margin-top: 20px;
`