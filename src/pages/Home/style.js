import styled from "styled-components";

export const Container = styled.div`
  h1 {
    textalign: center;
    margin: 4rem 0;
  }
`;

export const BoletimList = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, 1fr);
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Boletim = styled.div`
  display: flex;
  flex-direction: cloumn;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span {
    font-weight: blod;
    font-size: 120%;
  }

  a {
    transition: 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
