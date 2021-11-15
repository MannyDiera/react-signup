import React, { useEffect } from 'react';
import styles from './App.module.scss';
import logger from './utils/logger';
import SignUpForm from './components/Forms/SignUpForm/SignUpForm';

const App = () => {

  useEffect(() => {
    logger.landingMessage();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageContent}>
        <SignUpForm formName="Sign Up" />
      </div>
    </div>
  );
}

export default App;
