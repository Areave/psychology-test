import React, {useEffect} from 'react'
import './imageComp.scss'
import {Types} from '../../utils/types'
import {setImageSrc, setError} from "../../utils/store/actionCreators";
import {connect} from "react-redux";
import fileDownload from 'js-file-download'
import axios from 'axios'
import ActionButton from "../actionButton/actionButton";
import ComponentTitleComp from "../componentTitleComp/componentTitleComp";
import Loader from "../loader/loader";

const imgSrcDefault = 'https://www.thispersondoesnotexist.com/image';
const fileName = '../../assets/images/randomFace.jpg'

const ImageComp: React.FC<Types.ImageCompProps> = ({imageSrc, setImageSrc, setError}) => {

    useEffect(()=>{setNewImageSrc()}, []);

    const setNewImageSrc = () => {
        setImageSrc(null);
        setTimeout(()=>{
            setImageSrc(imgSrcDefault);
            console.log('set default src');
        }, 1000);
    };

    const throwError = () => {
        // throw new Error('app crashed!');
        setError(true, '234');

    };
    const downloadImage = async () => {
        axios.get(imgSrcDefault, {
            responseType: 'blob',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((res) => {
                fileDownload(res.data, fileName)
            })
    };
    return <div className='imageComp'>
        <div className="pictureCard">
            <ComponentTitleComp title={'Async download picture'}/>
            <div className="imageWrapper">
                {imageSrc ? <img className='image' src={imageSrc} alt=""/> : <Loader/>}

            </div>
            <ActionButton onClick={setNewImageSrc} label={'set random face'}/>
            <ActionButton onClick={downloadImage} label={'download picture'}/>
            <ActionButton onClick={throwError} label={'throw error'}/>
        </div>
    </div>
};

const mapDispatchToProps = {setImageSrc, setError};
const mapStateToProps = (state: Types.State) => {
    return {imageSrc: state.imageSrc, isError: state.isError}
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageComp);