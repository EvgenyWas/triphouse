import { ChangeEvent, memo, MouseEvent, useState } from 'react';
import { validateEmail } from '../../../../utils/utils';
import SignInButton from '../../Buttons/SignInButton';
import { StyledAuthWindow } from './styles';

const AuthWindow = () => {
    const [validation, setValidation] = useState<boolean>(true);

    function handleSubmit(event: MouseEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('submit');
    };
    function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        let emailValue = event.target.value;

        if (emailValue === '') {
            setValidation(true);
            return;
        };

        if (validateEmail(emailValue)) {
            setValidation(true);
        } else {
            setValidation(false);
        };
    };

    return (
        <StyledAuthWindow validation={validation}>
            <h4 className='auth__title'>Sign in</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userEmail" className='auth__label'>Email address</label>
                <input type="email" name='userEmail' className='auth__input auth__input--validation'onChange={handleChangeEmail}/>
                <label htmlFor="userPassword" className='auth__label'>Password</label>
                <input type="password" name='userPassword' className='auth__input'/>
                <SignInButton />
            </form>
        </StyledAuthWindow>
    );
};

export default memo(AuthWindow);