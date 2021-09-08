/**
 * 用来返回element ui中 from 可用的 rule 数据
 * 返回始终是个数组
 *
 * 使用方法:
 * 1. rule["required"]  必填项
 * 2. rule["input8"]  限定只能输入8位
 * 3. rule["input4:8"]  限定只能输入4 ~ 8位
 * 4. rule["input:8"]  限定只能输入0 ~ 8位
 *
 * 如果要使用多个匹配, 可用,隔开
 * 5. rule["required, input:8"]  必填且限定只能输入0 ~ 8位
 */

// 因为需要动态的获取国际化, 所以需要返回一个函数
const ruleMap = {
  required() {
    return {
      required: true,
      message: "请输入必填项",
    };
  },
};

// ===== 高阶
// 需要使用正则动态返回的rule, 优先级高于ruleMap中的内容
// 从数组的第一位开始做正则的匹配, 如果多个正则都匹配成功, 只取第一个
const ruleGenerateMap = [
  {
    // 例: inputLen10 表示只匹配长度为 10 的文本
    // 仅支持正整数
    exp: /^input(\d+)$/,
    output(key, expResult) {
      const input = Number(expResult[1]);
      return {
        min: input,
        max: input,
        message: "",
      };
    },
  },

  {
    // 例: inputLen5:10 表示匹配 5 ~ 10 位的文本
    // 其中 min可以省略, 如: inputLen:10 表示匹配 0 ~ 10 位的文本
    // 仅支持正整数
    exp: /^input(\d?):(\d+)$/,
    output(key, expResult) {
      const min = Number(expResult[1] || 0);
      const max = Number(expResult[2]);
      return {
        min,
        max,
        message: "",
      };
    },
  },
];

export const rule = new Proxy(ruleMap, {
  get(target, key) {
    const len = ruleGenerateMap.length;
    const keyList = key.split(",");
    return keyList.map((keyItem) => {
      // 正则匹配
      for (let i = 0; i < len; i += 1) {
        const ruleItem = ruleGenerateMap[i];
        const ruleExpResult = ruleItem.exp.exec(keyItem.trim());
        if (ruleExpResult) {
          return ruleItem.output(key, ruleExpResult);
        }
      }
      return target[keyItem.trim()]();
    });
  },
  set() { },
});

export function generateUUID() {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  let uuid = "xxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

export const getFormatter = (data, value) => {
  const getValue = myTransform.arrToObject(data, "value", "label")[value] || value;
  return getValue === "null" ? "" : getValue;
};
