import styled from "styled-components";
import { getFontsFragment } from "../../../../utils/utils";

export const StyledAuthWindow = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    padding: 36px 40px;
    border: 1px solid #CECECE;

    @media (max-width: ${({ theme }) => theme.media.medium}) {
        width: 80%;
        padding: 18px 20px;
    }

    .auth__title {
        margin-bottom: 40px;
        ${getFontsFragment('lg')}
        font-weight: ${({theme }) => theme.fontWeights.medium};
        text-align: center;

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            margin-bottom: 20px;
            ${getFontsFragment('md')}
        }
    }

    .auth__label {
        ${getFontsFragment('sm')}
        font-weight: 300;
        color: #333333;

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            ${getFontsFragment('xs')}
        }
    }

    .auth__input {
        width: 100%;
        height: 41px;
        margin-top: 8px;
        margin-bottom: 16px;
        padding: 0 12px;
        ${getFontsFragment('sm')}
        border: 2px solid #CECECE;
        border-radius: 8px;

        @media (max-width: ${({ theme }) => theme.media.medium}) {
            height: 33px;
            margin-bottom: 12px;
            ${getFontsFragment('xs')}
        }
    }

    .auth__input ~ .auth__input {
        margin-bottom: 24px;
    }
`