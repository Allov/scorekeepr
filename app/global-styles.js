import { injectGlobal } from 'styled-components';

import 'bootswatch/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
      position: relative;
      min-height: 100%;
  }

  body {
      /* Margin bottom by footer height */
      margin-bottom: 60px;
  }

  .btn {
    @media (max-width: 375px) {
      font-size: 12px!important;
    }
  }

  .player-score-td {
    @media (max-width: 375px) {
      width: 65px;
      input {
        font-size: 20px;
        width: 50px;
      }
    }

    @media (min-width: 376px) {
      width: 85px;
      input {
        font-size: 30px;
        width: 70px;
      }
    }
  }

  .main-container {
    margin-bottom: 30px;
  }

  .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      /* Set the fixed height of the footer here */
      height: 60px;
      background-color: #df691a;
      padding-top: 3px;

      a {
        color: #fff;
        margin: 10px;
      }

      a:hover {
        color: #dba27d;
      }

      p {
        margin-top: 12px;
      }
  }
`;
