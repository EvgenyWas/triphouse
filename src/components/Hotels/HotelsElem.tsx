import { memo, RefObject } from 'react';
import { THotel } from '../../types/types';
import Slider from '../UI/Slider.tsx/Slider';
import { Hotels } from './styles';

type Props = {
    searchRef?: RefObject<HTMLDivElement> | null,
    hotels: THotel[] | null,
    title: string,
};

const HotelsElem = memo(({searchRef, hotels, title}: Props) => {

    return (
        <Hotels className='hotels'>
            <div ref={searchRef} className='container hotels__container'>
                <h2 className='hotels__title'>{title}</h2>
                <Slider hotels={hotels} />
            </div>
        </Hotels>
    );
});

export default HotelsElem;