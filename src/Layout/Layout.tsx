// layouts/MainLayout.tsx
import Header from './Navbar';
import Footer from './Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
