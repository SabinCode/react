// a function to convert this type of date '2024-08-28T14:25:09.178Z' to this type  augest 28, 2024


export const convertDate = (date) => {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", {month:"long"});
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month} ${day} ${year}`;
}