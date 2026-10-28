function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-10 py-5 bg-blue-800 text-white">
        <div className="text-2xl font-bold "> 🚀 TechHub Store</div>
        <div className="flex gap-5 font-bold">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">contact</a>
        </div>
        <a
          href=""
          className="bg-white px-5 py-2  font-bold border-0 rounded-2xl text-blue-600"
        >
          Get Started
        </a>
      </nav>
    </>
  );
}
export default Navbar;
