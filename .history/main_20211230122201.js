let arr = [
  { 名称: "动物", id: 1, parent: null },
  { 名称: "狗", id: 2, parent: 1 },
  { 名称: "猫", id: 3, parent: 1 },
];

arr.reduce(function (result, item) {
    if(item.parent === null) {
        result.id = item.id;
        result.名称 = item.名称;
        // 怎么把其他两个item放入children中
        result.children = 
    } else {
        result.id = item.id;
        result.名称 = item.名称;
        delete item.parent
        result.children = 'null'
    }
}, { result: [], id: null });





// ------------------------------

arr.reduce(
  (result, item) => {
    if (item.parent === null) {
      result.id = item.id;
      result["名称"] = item["名称"];
    } else {
      result.children.push(item);
      delete item.parent;
      item.children = null;
    }
    return result;
  },
  { id: null, children: [] }
);
