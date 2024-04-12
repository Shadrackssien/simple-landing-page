import background from "./Assets/landing.png"
import Header from "./components/Header";
function App() {
  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <main className="h-screen w-screen" style={styles}>
      <Header />
    </main>
  );
}

export default App;
