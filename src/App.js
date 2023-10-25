
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div>
      <Header logo_src={'/img/content_thumb.png'}/>
      <Nav menu_items={[{title:"Новости", link:"/news"},{title:"О нас", link:"/about"}]}/>
      <Footer contacts={'Наши Контакты'} copy={'Наши Коперайты'}/>
    </div>
  );
}

export default App;
