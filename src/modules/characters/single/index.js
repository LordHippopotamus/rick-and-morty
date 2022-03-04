import { useParams } from "react-router-dom";
import { useFetchCharacterById } from "./useFetchCharacterById";
import SingleCharacter from "./SingleCharacter";

const CharacterPage = () => {
  const params = useParams();
  const id = params.characterId;

  const character = useFetchCharacterById(id);

  return <SingleCharacter character={character} />;
};

export default CharacterPage;
