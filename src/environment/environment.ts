export const environment = {
    production: false,
    keycloak: {
      tokenUrl: 'http://localhost:8180/realms/academic/protocol/openid-connect/token',
      clientId: 'academic-hub-app'
    },
    apiBaseUrl: 'http://localhost:8000/api'
  };