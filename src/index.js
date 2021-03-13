module.exports = function check(str, bracketsConfig) {
    let leftArr = [];
    let added = false;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            let same = bracketsConfig[j][0] === bracketsConfig[j][1];

            if (str[i] === bracketsConfig[j][0]) {
                if (!same) {
                    leftArr.push(str[i]);
                } else if (!added) {
                    leftArr.push(str[i]);
                    added = true;
                    break;
                }
            }

            let leftArrLength = leftArr.length;

            if (
                str[i] === bracketsConfig[j][1] &&
                leftArr[leftArrLength - 1] === bracketsConfig[j][0]
            ) {
                leftArr.pop();
                if (same) {
                    added = false;
                }
                break;
            } else {
                if (str[i] === bracketsConfig[j][1] && !same) {
                    return false;
                }
            }
        }
    }

    return leftArr.length === 0;
};
