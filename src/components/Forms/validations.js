// Would ideally refactor this to use an array of functions that either return true or the validation error message
export default {
  username: (value) => {
    if (!value || value.length < 2) {
      return {
        error: 'Username must be at least 2 characters.',
        stateClass: 'invalid'
      }
    }
    return {
      error: '',
      stateClass: 'valid'
    }
  },
  password: (value) => {
    if (!value || value.length < 5) {
      return {
        error: 'Password must be at least 5 characters.',
        stateClass: 'invalid'
      }
    }
    return {
      error: '',
      stateClass: 'valid'
    }
  },
  confirmPassword: (value, compareValue) => {
    if (value.length > 4 && compareValue.length > 4) {

      if (value !== compareValue) {
        return {
          error: 'Passwords do not match.',
          stateClass: 'invalid',
          success: ''
        }
      }
      return {
        error: '',
        success: 'Password Accepted!',
        stateClass: 'valid'
      }
    } else {
      return {
        error: 'Passwords must be at least 5 characters',
        stateClass: 'invalid',
        success: ''
      }
    }
  }
}
