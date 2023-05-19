import './descriptionComp.scss'
import * as React from 'react';
import {Types} from '../../utils/types'
import ImageComp from "../imageComp/imageComp";
// @ts-ignore
import ImageSrc from '../../assets/images/pauline_orid.png';

const DescriptionComp: React.FC<Types.DescriptionCompProps> = () => {
    // const totalAmountOfQuestions = 20;
    const textFirst = 'Тест основан на авторской методике немецкого психотерапевта Паулины Орид.';
    const textSecond = 'Выявляет неочевидные особенности характера с помощью на первый взгляд бессмысленных вопросов, на которые ' +
        'наш внутренний "цензор" не обращает внимания. ' +
        'Благодаря этому результаты получаются более близкими к реальному психологическому портрету испытуемого .';
    return <div className="descriptionComp">
        <div className="desc">{textFirst}</div>
        <ImageComp imageSrc={ImageSrc}/>
        <div className="desc">{textSecond}</div>
    </div>
}

export default DescriptionComp;