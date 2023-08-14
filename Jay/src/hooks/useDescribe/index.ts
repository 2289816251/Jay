export const changeDescribe = function (text:string) {
  return text.replace(/\\n/gi, '<br/>')
}
