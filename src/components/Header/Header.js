import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@mui/base';

export default function Header() {
  const router=useRouter()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do App
          </Typography>
    
          <Link href={router.pathname=="/complete"?"/":"/complete"} >{router.pathname=="/complete"?"TASKS":"COMPLETED TASKS"}</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}