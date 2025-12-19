import {
  HomePage,
  PortFolioStatus,
  PortFolioHomePage,
} from "../pages";
import { Navigate } from "react-router-dom";



export const appRoutes = [
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/portfolio-status",
    element: <PortFolioStatus />,
  },
  {
    path: "/portfolioStatusView",
    element: <PortFolioStatus />,
  },
  {
    path: `/portfolio-status/edit/:id`,
    element: <PortFolioStatus />,
  },
  {
    path: "/portfolio",
    element: <PortFolioHomePage />,
  },
  {
  path: "*",
  element: <Navigate to="/portfolio" replace />
}

 
];
