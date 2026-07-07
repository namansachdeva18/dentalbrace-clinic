import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* This main wrapper is crucial. It sits between Header and Footer. 
          By giving it flex: 1, it forces the Footer to the absolute bottom of the screen 
          even if the page content is very short. */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
