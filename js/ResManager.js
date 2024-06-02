let resDictionary = {};

function AwakeRes() {
    for (let i = 0; i < jsonData_Res.length; i++) {
        // console.log(`inf:${i}`);
        // console.log(jsonData_Res[i]);
        let item = NewRes(jsonData_Res[i]);
        item.newResLine.hide();
    }
}

function NewResByID(inputResID) {
    if (inputResID in resDictionary) {
        resDictionary[inputResID].show();
        // console.info(`已添加过${inputBtnId}`);
        return;
    }
    let iResData = getDataByResID(inputResID);
    NewRes(iResData);
}

function NewRes(iResData) {

    if (iResData.resID in resDictionary) {
        // console.info(`已添加过${inputBtnId}`);
        return;
    }
    let resValue = 0;

    let newResLine = $('<tr></tr>').attr('id', iResData.resID);

    let resName = $('<th></th>').text(iResData.textZh).addClass('res-name');
    let resStory = $('<td></td>').text("0").addClass('res-story');
    let resSpeed = $('<td></td>').text("0/s").addClass('res-speed');

    newResLine.append(resName);
    newResLine.append(resStory);
    newResLine.append(resSpeed);
    $('#res-list-box').append(newResLine);

    let group = { resValue, newResLine }
    // console.log(group);
    resDictionary[iResData.resID] = group;
    return group;
}

function ResAdd(inputResID, addValue) {
    let res;
    if (inputResID in resDictionary) {
        // console.info(`数据增加时 已添加过${inputResID}`);
        resDictionary[inputResID].newResLine.show();
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

function ResSatisfy(inputResID, satisfyValue) {
    if (inputResID in resDictionary) {
        // console.info(`数据增加时 已添加过${inputResID}`);
        resDictionary[inputResID].newResLine.show();
        let res = resDictionary[inputResID];
        return res.resValue >= satisfyValue;
    } else {
        return false;
    }
}