import styled from 'styled-components'

export const StoreImgsContainer = styled.div`
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;