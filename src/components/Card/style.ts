import styled from 'styled-components';

export const Container = styled.div`
    width: 150px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;

    p {
        font-size: x-small;
        margin: 5px 0;
    }

    span {
        color: darkviolet;
        font-size: small;
        margin-bottom: 5px;
    }
`;

export const Image = styled.img`
    width: 50px;
    height: 100px;
    object-fit: cover;
`;