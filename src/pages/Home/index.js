import { Container, BoletimList, Boletim } from "./style";
import { useState, useEffect } from "react";

const boletins = [
  {
    nome: "opa",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055670.png",
  },
  {
    title: "opa",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055670.png",
  },
  {
    title: "opa",
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055670.png",
  },
];

function Home() {
  const [boletins, setBoletim] = useState([]);
  const apiKey = "086dec5a3727c4c963ca847b2892c10a";
  const username = "admin";
  const password = "admin";

  useEffect(() => {
    fetch(
      `http://localhost:8000/boletim-nota/`,
      {
        headers: {
          Authorization: "Basic " + btoa(`${username}:${password}`),
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('opa', data.results)
        setBoletim(data.results)
      })
  }, []);

  return (
    <Container>
      <h1>Boletim</h1>
      <BoletimList>
        {boletins.map((boletim) => {
          return (
            <Boletim>
              <a href="">
                <img src="https://cdn-icons-png.flaticon.com/512/1055/1055670.png"></img>
              </a>
              <ul>
                <li>
                  <span>{boletim.nota}</span>
                </li>
                <li><span>{boletim.disciplina}</span></li>
                <li><span>{boletim.boletim}</span></li>
              </ul>
            </Boletim>
          );
        })}
      </BoletimList>
    </Container>
  );
}

export default Home;
