import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Main from '../../components/main/Main';
import './home.css';

const Home = (props) => {
  return (
    <div>
        <Header
          data={props.data}
          saveStock={props.saveStock}
          handleSaveData={props.handleSaveData}
        />
        <Main
          data={props.data}
          saveData={props.saveData}
          setSaveData={props.setSaveData}
          handleSaveData={props.handleSaveData}
          handleSaveStock={props.handleSaveStock}
        />
        <Footer />
    </div>
  )
}

export default Home;