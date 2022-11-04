import md5 from 'md5';
/**
 *生成请求接口需要的icode 和 codetype
 * @returns {icode, codetype}
 */
export default () => {
  // codetype是获取以秒为单位的时间戳
  const codetype = parseInt(Date.now() / 1000);
  // icode是 时间戳 + 字符串 然后再通过md5加密生成
  const icode = md5(codetype + 'LGD_Sunday-1991-12-30');
  return {
    icode,
    codetype
  };
};
