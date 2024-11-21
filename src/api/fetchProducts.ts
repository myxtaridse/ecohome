export const reqProduct = async () => {
    const res = await fetch('http://localhost:3000/goods');
    return res.json();
}
