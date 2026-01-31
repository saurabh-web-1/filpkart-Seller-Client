import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="min-h-[70vh] 
        bg-gradient-to-b from-indigo-50 via-purple-50 to-white">

        <div className="max-w-[1580px] mx-auto px-4 py-4">
          {children}
        </div>

      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
