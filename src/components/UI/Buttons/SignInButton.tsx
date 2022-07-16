import React, { memo } from 'react';
import styled from 'styled-components';
import { getFontsFragment } from '../../../utils/utils';

const SignInButton = () => {
    return (
        <StyledButton type='submit'>
            Sign in
        </StyledButton>
    );
};

const StyledButton = styled.button`
    width: 100%;
    height: 48px;
    padding: 12px;
    ${getFontsFragment('lg')}
    font-weight: ${({theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.generalWhite};
    text-align: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.acceptBlue};

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        height: 38px;
        padding: 8px;
        ${getFontsFragment('md')}
    }
`

export default memo(SignInButton);