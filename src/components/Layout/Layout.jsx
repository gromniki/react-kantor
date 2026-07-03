import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
