import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Main from '../../components/main/Main';

import './item.css';

export default function Item(props) {
    return (
        <>
            <Header />
            <Main response={props.response}/>
            <Footer />
        </>
    );
  };