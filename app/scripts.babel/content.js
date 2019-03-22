let terms = [
  {
    item: /Office 365/ig,
    through: 'Office 366',
    if: () => {
      return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
  }
]

let replaceString = (str) => {
  for (let i = 0; i < terms.length; i++) {
    if (terms[i].if()) {
      str = str.replace(terms[i].item, terms[i].through);
    }
  }
  return str;
}

document.title = replaceString(document.title);

let replaceAll = function () {
  let elements = document.getElementsByTagName('*');

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
      let node = element.childNodes[j];

      if (node.nodeType === 3) {
        let text = node.nodeValue;
        let replacedText = replaceString(text);

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}

let count = terms.filter(x => x.if()).length;
if (count > 0) {
  replaceAll();
  setInterval(replaceAll, 3000);
}

