import styled from 'styled-components';

export const PreloaderCircle = styled.div`
   div {
      margin: 20% auto;
      width: 50px;
      height: 50px;
      display: block;
      background: transparent;
      border-radius: 50%;
      border: 7px solid rgba(28, 128, 128, 0.2);
      border-left: 7px solid #3F51B5;
      animation: 2s rotate infinite linear;
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
`;