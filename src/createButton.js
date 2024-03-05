export default function createButton(classAttribute, idAttribute, dataIndex) {
  const button = document.createElement("button");
  button.setAttribute("class", classAttribute);
  button.setAttribute("id", idAttribute);
  button.dataset.index = dataIndex;
  return button;
}
