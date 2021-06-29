import * as React from 'react';
import {
    InputFeild,
    Button
} from './style.js';

type Props = {
    value: string,
    onChange(event: React.FormEvent<HTMLInputElement>): void,
    onClick(): void,
    text: string,
}
const Input: React.FC<Props> = (props) => {
    const {value, onChange, onClick, text} = props;
    return (
        <>
            <InputFeild
                type="text"
                value={value}
                onChange={onChange}
            />
            <Button onClick={onClick}>{text}</Button>
        </>
    );
};

export default React.memo(Input);