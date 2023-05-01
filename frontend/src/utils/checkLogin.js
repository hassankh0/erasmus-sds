export const checkLogin = () => {
    return sessionStorage.getItem('student') !== null;
}