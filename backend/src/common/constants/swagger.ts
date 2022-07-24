const SWAGGER = {
  // auth
  AUTH: {
    TAG: 'auth',
    URL: 'api/auth',
    SIGN_IN: {
      URL: 'signIn',
      SUMMARY: 'This is Sign In API',
      DESC: 'Sign In API',
      RES: {
        OK: 'OK',
        UNAUTHORIZED: 'UNAUTHORIZED'
      },
      MSG: {
        OK: '',
        UNAUTHORIZED: ''
      }
    },
    GET_USER_BY_SESSION: {
      URL: 'getUserBySession',
      SUMMARY: 'This is Get User By Session API',
      DESC: 'Get User By Session API',
      RES: {
        OK: 'OK',
        UNAUTHORIZED: 'UNAUTHORIZED'
      },
      MSG: {
        OK: '',
        UNAUTHORIZED: ''
      }
    }
  },

  // user
  USER: {
    TAG: 'user',
    URL: 'api/user',
    CREATE_USER: {
      URL: 'createUser',
      SUMMARY: 'This is Create User API',
      DESC: 'Create User API',
      RES: {
        OK: 'OK'
      },
      MSG: {
        OK: ''
      }
    }
  }
}

export default SWAGGER
