import styled, { css } from 'styled-components';

const FullscreenFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 300px;
    font-size: clamp(1.4rem, 3.25vmin, 2.2rem);
    padding: .4em;
    margin: .8em 0;
    color: var(--light-text-clr);
    border-radius: 10px;
    background-color: var(--light-background-clr);
    border: 3px solid black;

    justify-content: space-evenly;
    align-items: center;
    > * { 
        margin: 0;
    }

    ${
    props =>
        props.fullscreen && css`> * { width: 100%; margin: 0; }
                                > * + * { margin-top: .4em; }
                                flex-direction: column;
                                position: fixed;
                                top: ${props.top};
                                right: ${props.right};
                                left: ${props.left};
                                bottom: ${props.bottom};
                                z-index: ${props.zIndex};
                                margin: .4rem;`
    }
`;

export default FullscreenFlexContainer;