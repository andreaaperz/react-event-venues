const storage = {
    get(key) {
        try {
            let rawValue = window.localStorage.getItem(key);
            return JSON.parse(rawValue);
        } catch (error) {
            console.log(`Error parsing storage item with key  "${key}"`)
            return null;
        }
    },

    /**
     * 
     * @param { it is the value id} key 
     * @param { it is what i need to storage} value 
     */
    set(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
}

export { storage };