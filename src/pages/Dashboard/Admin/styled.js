import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 90%;
    padding: 12px;
    h1{
        text-align: center;
        color: white;
    };
`;
export const Blocks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 12px;
    padding: 12px;
    background-color: whitesmoke;
    p{
        margin-right: 36px;
    };
`;