import React from 'react'
import {Pagination as PaginationMUI} from '@mui/material';
import Stack from '@mui/material/Stack';

 const Pagination = () => {
  return (
    <Stack spacing={2}>
    <PaginationMUI count={12} />
  </Stack>
  )
}

export default Pagination