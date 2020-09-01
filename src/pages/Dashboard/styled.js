import styled from 'styled-components';

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    height: 100%;
`;
export const NavContainer = styled.div`
    width: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    background-color: black;
    align-self: center;
    margin-bottom: 12px;
`;
export const MainContainer = styled.div`
    max-width: 370px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
`;
export const BandBox = styled.div`
    margin: 12px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    p{
        text-align: center;
        font-weight: bold;
        color: white;
        margin-top: -30px;
        text-shadow: black 0.1em 0.1em 0.2em;
    };
    img{
        border-radius: 12px;
    };
`;