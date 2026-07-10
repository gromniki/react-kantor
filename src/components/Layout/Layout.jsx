import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ScrollProgress } from '../ScrollProgress/ScrollProgress';

export const Layout = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
