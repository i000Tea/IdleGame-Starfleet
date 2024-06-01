let resDictionary = {};

function NewRes(inputResID) {

    if (inputResID in resDictionary) {
        // console.info(`已添加过${inputBtnId}`);
        return;
    }
    let resValue = 0;
    let getItem = getDataByResID(inputResID);

    let newResLine = $('<tr></tr>').attr('id', inputResID);

    let resName = $('<th></th>').text(getItem.textZh).addClass('res-name');
    let resStory = $('<td></td>').text("0").addClass('res-story');
    let resSpeed = $('<td></td>').text("0/s").addClass('res-speed');

    newResLine.append(resName);
    newResLine.append(resStory);
    newResLine.append(resSpeed);
    $('#res-list-box').append(newResLine);

    let group = { resValue, newResLine }
    console.log(group);
    resDictionary[inputResID] = group;
    return group;
}

function ResAdd(inputResID, addValue) {
    let res;
    if (inputResID in resDictionary) {
        // console.info(`数据增加时 已添加过${inputResID}`);
        res = resDictionary[inputResID];
    }
    else {
        // console.info(`添加新的${inputResID}`);
        res = NewRes(inputResID);
    }
    // console.log(res);
    res.resValue += addValue;
    res.newResLine.find('.res-story').text(res.resValue);
    // console.log(res);
}