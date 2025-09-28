import styled from 'styled-components';

export const FormSty = styled.div`
  
    max-width: 480px;
    margin: 40px auto;
    padding: 20px;

    .vsmovie-form {
        width: calc(100% - 20px);
    }

    .vsmovie-form-group {
        margin-bottom: 20px;
        label {
            font-size: 12px;
            color: var(--color-text2);
        }
    }

    .vsmovie-form-btn-container {
        display: flex;
        justify-content: center;
    }

    .vsmovie-movie-card-image {
        width: 100%;
        border-radius: 8px 8px 0 0;
    }

    .vsmovie-card-bottom-container {
        background-color: var(--color-background1);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 10px 20px 10px;
        border-radius: 0 0 8px 8px;
        h3 {
            color: var(--color-text2);
            text-align: center;
            font-size: 14px;
            font-weight: 700;
            margin-bottom: 10px;
            min-height: 40px;
        }
    }

    .vsmovie-btn {
        color:var(--color-text1);
        background-color: var(--color-btn);
        font-size: 14px;
        font-weight: 700;
        height: 40px;
        width: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
