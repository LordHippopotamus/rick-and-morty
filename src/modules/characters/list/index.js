import { useSearchParams } from "react-router-dom";
import { useFetchAllCharacters } from "./useFetchAllCharacters";
import CharactersList from "./CharactersList";

const CharactersPage = () => {
  const [searchParams] = useSearchParams();
  const page = +searchParams.get("page") || 1;

  const { info, results } = useFetchAllCharacters(page);

  return <CharactersList characters={results} pages={info.pages} page={page} />;
};

export default CharactersPage;
