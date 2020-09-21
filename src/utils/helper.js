export const updateVal = (value) => {
    localStorage.setItem("val", value);
}

export const getUpdate = () => {
    const val = localStorage.getItem("val");
    return val === null ? 0 : val;
}