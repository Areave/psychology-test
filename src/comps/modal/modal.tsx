import React, {useEffect} from 'react'
import './modal.scss'
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";
import { Button, Card, Row, Col } from 'react-materialize';
import Modal from "react-materialize/lib/Modal";
import ActionButton from "../actionButton/actionButton";

const MyModal: React.FC = ({children}) => {

    return <Modal
        actions={[
            <Button flat modal="close" node="button" waves="green">Понятно</Button>
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header="Непредвиденная ошибка"
        id="Modal-10"
        open={false}
        options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
        }}
        root={document.body}
        trigger={children}>
        <p>
            Результаты теста показали что вы пидор, а мы не отсылаем результаты на почту пидорам.
        </p>
    </Modal>
};

export default MyModal;