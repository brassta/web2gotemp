import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class JsonTraverseUtilityService {
    private level = 0;
    private currentPath = [];
    private index = 0;

    constructor() {
    }

    traverse(currentObject) {
        if (!Array.isArray(currentObject)) {
            ++this.level;
        }

        for (const item in currentObject) {
            if (currentObject[item] !== null && typeof (currentObject[item]) === 'object') {
                if (item !== 'Children') {
                    currentObject[item]['ALevel'] = this.level;
                    currentObject[item]['Opened'] = false;
                    this.currentPath[this.level] = item;
                    this.currentPath.length = this.level + 1;
                    currentObject[item]['TraversePath'] = this.currentPath.join('|');
                } else {
                    // terminal node
                }
                this.traverse(currentObject[item]);
            }
        }
        if (!Array.isArray(currentObject)) {
            --this.level;
        }
    }

    /**
     * find elements by key value pair
     * @param data
     * @param key
     * @param resultArray
     */
    private findByKeyValue(jsonData: any, key: string, value: any, resultArray) {
        if (jsonData instanceof Object) {
            for (const nestedProperty in jsonData) {
                if (jsonData.hasOwnProperty(nestedProperty)) {
                    if (nestedProperty === key && jsonData[nestedProperty] === value) {
                        resultArray.push(jsonData);
                    }
                    this.findByKeyValue(jsonData[nestedProperty], key, value, resultArray);
                }
            }
        } else {
        }
    }

    /**
     * find values by key
     * @param data
     * @param key
     * @param resultArray
     */
    private findByKey(data: any, key: string, resultArray) {
        if (data instanceof Object) {
            for (const nestedProperty in data) {
                if (data.hasOwnProperty(nestedProperty)) {
                    if (nestedProperty === key) {
                        resultArray.push(data[key]);
                        // console.log(data[key]);
                    }
                    this.findByKey(data[nestedProperty], key, resultArray);
                }
            }
        } else {
        }
    }


    /**
     * all elments with searched key value pair in data
     * @param jsonData
     * @param key
     * @param value
     * @returns {Array}
     */
    searchJsonByKeyValueFoundedArr(jsonData, key, value) {
        const founded = [];
        this.findByKeyValue(jsonData, key, value, founded);
        return founded;
    }

    /**
     * all values with searched key in data
     * @param data
     * @param key
     * @returns {Array}
     */
    searchJsonByKeyFoundedArr(data, key) {
        const founded = [];
        this.findByKey(data, key, founded);
        return founded;
    }


    /**
     * traverse by path until down to searched item
     * @param jsonData
     * @param path
     * @returns {*}
     */
    findJsonElementByProvidedPath(jsonData: any, path: string) {
        const pathValuesArray = path.split('|');
        let initialData = jsonData[pathValuesArray[0]];
        pathValuesArray.splice(0, 1);
        while (pathValuesArray.length) {
            initialData = initialData['Children'][pathValuesArray[0]];
            pathValuesArray.splice(0, 1);
        }
        return initialData;
    }

    /**
     * traverse by path down until searched parent of item is founded
     * @param data
     * @param path
     * @returns {*}
     */
    findJsonElementParentByProvidedPath(data, path) {
        const pathValuesArray = path.split('|');
        pathValuesArray.pop();
        const newPath = pathValuesArray.join('|');
        return this.findJsonElementByProvidedPath(data, newPath);
    }


    /**
     * search for all objects by key value pair until searched parent of item is founded and return all of them
     * @param data
     * @param key
     * @param value
     * @returns {Array}
     */
    findJsonElementsParentByProvidedKeyValue(data, key, value) {
        const resultDataArr = [];
        const founded = this.searchJsonByKeyValueFoundedArr(data, key, value);
        for (const item of founded) {
            const pathValue = item['TraversePath'];

            const parent = this.findJsonElementParentByProvidedPath(data, pathValue);
            resultDataArr.push(parent);
        }
        // return [...new Set(resultDataArr.map(item => {
        //     return item;
        // }))]
        return resultDataArr;
    }

    /**
     * search for all objects by key value pair until searched parent of item is founded and return unique array of them
     * @param data
     * @param key
     * @param value
     * @returns {Array}
     */
    findDistinctJsonElementsParentByProvidedKeyValue(data, key, value) {

        return Array.from(new Set(this.findJsonElementsParentByProvidedKeyValue(data, key, value).map(item => {
            return item;
        })));

    }


}
