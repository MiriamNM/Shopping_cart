import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Main from '../../components/main/Main';
import './home.css';

const Home = (props) => {
  return (
    <div>
        <Header
          data={props.data}
          handleSaveData={props.handleSaveData}
          saveStock={props.saveStock}
          setSaveStock={props.setSaveStock}
        />
        <Main
          data={props.data}
          saveData={props.saveData}
          setSaveData={props.setSaveData}
          handleSaveData={props.handleSaveData}
          saveStock={props.saveStock}
          setSaveStock={props.setSaveStock}
          // handleSaveStock={props.handleSaveStock}
        />
        <Footer />
    </div>
  )
}

export default Home;