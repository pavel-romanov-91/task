
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';


function App() {
//   const our_data = ['Item1', 'Item2', 'Item3', 'Iten4']
//  const [var1,var2,var3,var4] = our_data;
//   const handleClick = ()=>console.log(var1,var2,var3,var4);
// onClick={handleClick}
  return (
    <div>
      <Header logo_src={'/img/content_thumb.png'} />
      <Nav menu_items={[{title:"Новости", link:"/news"},{title:"О нас", link:"/about"}]}/>
      <Footer contacts={'Наши Контакты'} copy={'Наши Коперайты'}/>
    </div>
  );
}

export default App;
