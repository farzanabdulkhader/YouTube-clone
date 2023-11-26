import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Videos from "./components/Videos";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Videos />
      </main>
    </div>
  );
}

export default App;
