import "../../styles/components/MainLayout.css";

import { Header } from "../header/Header";

export const MainLayout = ({ currentPage, children }) => {
  return (
    <div className="page-wrapper">
      <Header currentPage={currentPage} />
      {children}
    </div>
  );
};
