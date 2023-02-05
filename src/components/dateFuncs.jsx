const dateOptions = {
    dateStyle: "short",
    timeStyle: "short",
}

export default function convertDate(dateString) {
    return new Date(dateString).toLocaleString('he-IL', dateOptions);
}