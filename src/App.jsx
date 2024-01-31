import './App.css';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Interactive from './components/Interactive';
import Creation from './components/Creation';
import CreationDesktop from './components/CreationsDesktop';
import Footer from './components/Footer';
function App() {
  return (
    <main>
      <Header />
      <Showcase />
      <Interactive />
      <CreationDesktop />
      <Creation />
      <Footer />
    </main>
  );
}

export default App;
