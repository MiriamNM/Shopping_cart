import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Main from '../../components/main/Main';
import './home.css';

const Home = (props) => {
  return (
    <div>
        <Header />
        <Main 
          data={props.data}
          saveData={props.saveData}
          setSaveData={props.setSaveData}
          handleSaveData={props.handleSaveData}
        />
        <Footer />
    </div>
  )
}

export default Home;