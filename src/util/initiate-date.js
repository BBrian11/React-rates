const initiateDate = () => {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    const currentDate = localISOTime.match(/\d{4}(-\d\d){2}/g)[0]
    return currentDate
}

export default initiateDate