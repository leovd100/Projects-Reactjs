import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import {useState} from 'react';
import {Main} from './components/conteudo/main';

const App = () => {


  const [name, setName] = useState('Demetrio');
  const [bg, setBg] = useState('');
  const [age, setAge] = useState(90);


 

  return (
    <div>
      <Header />
      <Main />
      

      <Footer/>
    </div>
  )
}


export default App;