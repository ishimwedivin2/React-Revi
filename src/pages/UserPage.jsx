import Header from "./Header";
import Footer from "./Footer";

const UserPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-3xl font-bold">User Dashboard</h2>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
