import {
    AsyncStorage,
} from 'react-native';

class DataCache {

    setCacheData(key, value) {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, value, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            })
        })
    }

    getCacheData(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }

    removeCacheData(key) {
        return new Promise((resolve, reject) => {
            AsyncStorage.removeItem(key, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            })
        })
    }
}

export default DataCache;