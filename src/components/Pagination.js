import { Button, Flex } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ maxPages, active }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  let pages = [];

  if (active <= 3) {
    pages = [1, 2, 3, 4, maxPages];
  }

  if (active > maxPages - 3) {
    pages = [1, maxPages - 3, maxPages - 2, maxPages - 1, maxPages];
  }

  if (active <= maxPages - 3 && active > 3) {
    pages = [1, active - 1, active, active + 1, maxPages];
  }

  if (maxPages <= 5) {
    pages = [];
    for (let i = 1; i <= maxPages; i++) {
      pages.push(i);
    }
  }

  return (
    <Flex>
      {pages.map((el) => (
        <Button
          isActive={active === el}
          onClick={() => {
            if (el === 1) setSearchParams({});
            if (el !== 1) setSearchParams({ page: el });
          }}
          borderRadius="full"
          key={el}
          mx={1}
        >
          {el}
        </Button>
      ))}
    </Flex>
  );
};

export default Pagination;
