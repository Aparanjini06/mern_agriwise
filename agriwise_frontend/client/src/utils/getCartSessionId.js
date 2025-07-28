export const getCartSessionId = () => {
  let id = localStorage.getItem('cartSessionId');
  if (!id) {
    id = `guest-${Date.now()}`;
    localStorage.setItem('cartSessionId', id);
  }
  return id;
};
