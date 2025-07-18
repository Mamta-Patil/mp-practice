// export const getToken = () => {
//   return localStorage.getItem('token');
// };

// export const setToken = (token) => {
//   localStorage.setItem('token', token);
// };

// export const getRole = () => {
//   const token = getToken();
//   if (!token) return null;
//   const payload = JSON.parse(atob(token.split('.')[1]));
//   return payload.role;
// };

// export const isAuthenticated = () => {
//   return !!getToken();
// };

// export const isAdmin = () => {
//   return getRole() === 'ADMIN';
// };


export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getRole = () => {
  const token = getToken();
  if (!token) return null;

  try {
    // Split the token into parts and get the payload
    const [header, payload] = token.split('.');
    if (!payload) return null;

    // Convert base64url to base64 by replacing characters and adding padding
    let base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) base64 += '=';

    // Decode the payload
    const decoded = atob(base64);
    const parsedPayload = JSON.parse(decoded);
    return parsedPayload.role || null;
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const isAdmin = () => {
  return getRole() === 'ADMIN';
};
