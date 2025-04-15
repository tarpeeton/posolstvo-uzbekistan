export const splitHtmlContent = (html: string, splitIndex: number) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const allNodes = Array.from(doc.body.childNodes);
  const firstPartNodes = allNodes.slice(0, splitIndex);
  const secondPartNodes = allNodes.slice(splitIndex);

  const getInnerHtml = (nodes: ChildNode[]) => {
    const container = document.createElement("div");
    nodes.forEach((node) => container.appendChild(node.cloneNode(true)));
    return container.innerHTML;
  };

  return {
    firstHalf: getInnerHtml(firstPartNodes),
    secondHalf: getInnerHtml(secondPartNodes),
  };
};
