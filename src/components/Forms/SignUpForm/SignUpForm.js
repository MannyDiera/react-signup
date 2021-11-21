import React, {useState} from 'react';
import styles from './SignUpForm.module.scss';
import PassportLoader from '../../Animations/Passports';
import validations from '../validations';

const SignUpForm = ({ formName }) => {
  const [formValid, setFormValid] = useState(false);

  const [inputs, setInputs] = useState({ username: '', password: '', confirmPassword: ''});
  const [inputStates, setInputStates] = useState({
    username: {
      stateClass: ' ',
      error: ''
    },
    password: {
      stateClass: ' ',
      error: ''
    },
    confirmPassword: {
      stateClass: ' ',
      error: '',
      success: ''
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    Object.keys(inputs).forEach((item) => {
      const value = inputs[item];

      setInputs(inputs => ({...inputs, [item]: value}));
      const validatedInputValue = validations[item](value, inputs['password']);

      setInputStates(inputStates => ({...inputStates, [item]: {...validatedInputValue }}));

      setFormValid(Object.values(inputStates).every(item => item.stateClass === 'valid'));
    });

    handleInputChange();
    if (!formValid) {
      alert('Nothing yet')
    }
  }

  const handleInputChange = (event, valueToCompare) => {
    event.persist();

    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    const validatedInputValue = validations[event.target.name](event.target.value, valueToCompare);

    setInputStates(inputStates => ({...inputStates, [event.target.name]: {...validatedInputValue }}));

    setFormValid(Object.values(inputStates).every(item => item.stateClass === 'valid'));
  }

  return (
    <div className={`card ${styles.card}`}>
      <div className={styles.cardHeader}>
        <h2>{formName}</h2>
        <div className="animatedLogo">
          <PassportLoader/>
        </div>
      </div>
      <div className="card-content">
        <form id="sign_up" onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className="input-field">
              <input
                id="username" type="text" className={`${inputStates.username.error ? 'invalid' : ''}`}
                name="username" value={inputs.username}  onChange={(e) => setInputs({...inputs, username: e.target.value })}
              />
              <label htmlFor="username">Username</label>
              <span className="helper-text">{inputStates.username.error}</span>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className="input-field">
              <input
                id="password" type="password" className={`${inputStates.password.error ? 'invalid' : ''}`}
                name="password" value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value })}
              />
              <label htmlFor="password">Password</label>
              <span className="helper-text">{inputStates.password.error}</span>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className="input-field">
              <input
                id="confirm_password" type="password" className={`${inputStates.confirmPassword.error ? 'invalid' : ''}`}
                name="confirmPassword" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
              />
              <label htmlFor="confirm_password">Confirm Password</label>
              <span className={`helper-text ${inputStates.confirmPassword.stateClass}`}>{inputStates.confirmPassword.error || inputStates.confirmPassword.success}</span>
            </div>
          </div>
          <div  className={styles.formRow}>
            <button className={`btn btn-block ${styles.enabledBtn}`} type="submit" name="action" onSubmit={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
