import { MouseEvent } from 'react';
import SignInButton from '../../Buttons/SignInButton';
import { StyledAuthWindow } from './styles';

const AuthWindow = () => {

    function handleSubmit(event: MouseEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('submit');
    };

    return (
        <StyledAuthWindow>
            <h4 className='auth__title'>Sign in</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userEmail" className='auth__label'>Email address</label>
                <input type="email" name='userEmail' className='auth__input'/>
                <label htmlFor="userPassword" className='auth__label'>Password</label>
                <input type="password" name='userPassword' className='auth__input'/>
                <SignInButton />
            </form>
        </StyledAuthWindow>
    );
};

export default AuthWindow;