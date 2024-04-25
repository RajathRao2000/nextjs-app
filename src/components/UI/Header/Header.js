import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/router";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
export default function Header() {
 const loader=useSelector(state=>state.ui.loader)

  const router = useRouter();
  return (
    <>
    {loader && <Loader />}

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do App
          </Typography>

          <Link
            className="hover:underline"
            href={router.pathname == "/completedtasks" ? "/today" : "/completedtasks"}
          >
            {router.pathname == "/completedtasks" ? "TASKS" : "COMPLETED TASKS"}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
    
  );
}
