// Function to append all the classes together 
const composeClasses = (rootClasses: Array<string | boolean | undefined>, componentPrefix: string, customClass?: string) => {
    let allClasses = componentPrefix;
    for (let i = 0; i < rootClasses?.length; i++) {
        const value = rootClasses[i];
        if (value) {
            allClasses += ' ' + `${componentPrefix}-` + value;
        }
    }
    if (customClass) {
        allClasses += ' ' + customClass
    }
    return allClasses;
}

export { composeClasses }