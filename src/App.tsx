import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div
      className={`overflow-y-auto dark bg-skin-main App window  h-screen w-screen`}
    >
      <Navbar />

      <div className="w-screen mt-20 mb-20 text-center ">
        <div className="inset-0 z-0 "></div>
        <div className="z-10 rounded-xl">
          <div className="text-center">
            <img
              alt="Lab Assistant"
              className="items-center justify-center block m-auto w-14 h-14"
              src="https://i.imgur.com/h01hekd.png"
            />
            <h2 className="mt-5 text-3xl font-bold text-skin-main">
              Lab Assistant
            </h2>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
