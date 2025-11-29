import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div className="border-2 border-blue-900 px-1 py-1">{children}</div>

      <Footer />
    </>
  );
}

export default MainLayout;
