import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Main from '../../components/main/Main';

import './item.css';

export default function Item(props) {
    return (
        <>
            <Header data={props.data}/>
            <Main
                data={props.data}
                saveData={props.saveData}
                saveStock={props.saveStock}
                setSaveStock={props.setSaveStock}
            />
            <Footer />
        </>
    );
  };