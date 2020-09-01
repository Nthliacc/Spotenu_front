import styled from 'styled-components';

export const Page = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Title = styled.h1`
    text-align: center;
    color: black;
`;
export const InputBox = styled.div`
    margin: 8px;
    padding: 12%;
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 6px;
    border-radius: 12px;
    background-color: whitesmoke;
    button {
        opacity: 1;
    };
`;