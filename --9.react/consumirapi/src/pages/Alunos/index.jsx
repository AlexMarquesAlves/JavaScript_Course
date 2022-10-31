import { get } from "lodash";
import { useEffect, useState } from "react";
import { FaEdit, FaUserCircle, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import axios from "../../services/axios";
import { Container } from "../../styles/global-styles";
import { AlunoContainer, ProfilePicture } from "./styles";

export const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get("/alunos");
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, "Fotos[0].url", false) ? (
                <img src={aluno.Fotos[0].url} alt={`${aluno.name} picture`} />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit className="edit" size={16} />
            </Link>

            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose className="delete" size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
};
