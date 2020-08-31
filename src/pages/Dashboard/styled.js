import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 95%;
`;
export const NavContainer = styled.div`
    background-color: black;
    width: 100%;
    align-self: center;
    color: white;
`;
export const Container = styled.div`
    max-width: 370px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
`;
export const BandBox = styled.div`
    margin: 12px;
    display: flex;
    flex-direction: column;
    background-color: green;
    p{
        text-align: center;
        font-weight: bold;
        color: white;
        margin: 0;
    }
`;