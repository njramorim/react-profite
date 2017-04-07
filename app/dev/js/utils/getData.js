const urlPrefix = './../../static/data/'

export function getData(fileName) {
	let url = urlPrefix + fileName
  return fetch(url).then(response => response.json())
}
