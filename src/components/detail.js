import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");
export default function Detail() {
  const params = useParams();
  const id = Number(params.mascotaId)
  const [pet, setMascotaEncontrada] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const pet = data.find(element => element.id === id);
        setMascotaEncontrada(pet);
      });
  }, [id]);

  return (
    <div>
      <h1>{pet.nombre}</h1>
      <Card.Img
        src={pet.foto}
        alt={pet.descripcion}
        style={{ width: "20rem"}}
      />
      <h3> {pet.raza}</h3>
    </div>
  );
}