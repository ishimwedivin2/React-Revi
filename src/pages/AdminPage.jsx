import Header from "./Header";
import Footer from "./Footer";

const AdminPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl font-bold">Admin Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
