import { Pagination as MuiPagination } from '@mui/material';
import { useRouter } from 'next/router';

const Pagination = ({ pages, pathname }) => {
  const router = useRouter();
  const handleChange = (event, value) => {
    router.push({
      pathname: '/' + pathname,
      query: { ...router.query, page: value },
    });
  };
  return (
    <MuiPagination
      count={pages}
      page={+router.query.page || 1}
      onChange={handleChange}
      color="primary"
      sx={{ mx: 'auto' }}
      hidePrevButton
      hideNextButton
    />
  );
};

export default Pagination;
