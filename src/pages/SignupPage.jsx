const SignupPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="w-80 bg-white p-6 shadow-md rounded">
          <input type="text" placeholder="Username" className="w-full p-2 mb-3 border" />
          <input type="email" placeholder="Email" className="w-full p-2 mb-3 border" />
          <input type="password" placeholder="Password" className="w-full p-2 mb-3 border" />
          <button type="submit" className="w-full p-2 bg-green-500 text-white">Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default SignupPage;
  