import React, {useState, useRef} from 'react'
import {connect} from 'react-redux'
import {setWelcomeAction} from "../../utils/store/actionCreators";
import {Types} from '../../utils/types'
import './typingComp.scss'
import {useNavigate} from 'react-router'
import NavigationButton from '../navigationButton/navigationButton';
import ComponentTitleComp from "../componentTitleComp/componentTitleComp";


const TypingComp: React.FC<Types.WelcomeCompProps> = (props) => {
    const nameInput = useRef(null);
    const navigate = useNavigate();
    const setName = () => {
        props.setWelcomeAction(nameInput.current.value)
    }
    return <div className='welcomeComp'>
        <div className="inputWrapper">
            <ComponentTitleComp title={'Binding data using Redux'}/>
            <input ref={nameInput} type='text' onInput={setName}/>
            <div className="name">you type: {props.name}</div>
        </div>
        <NavigationButton title={'go to page 2'} route={'/page2'}/>
    </div>
}

const mapDispatchToProps = {setWelcomeAction}

export default connect(null, mapDispatchToProps)(TypingComp)