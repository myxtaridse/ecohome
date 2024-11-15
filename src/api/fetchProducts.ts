export const reqProduct = async () => {
    const res = await fetch('http://localhost:300/goods');
    return res.json();
}
