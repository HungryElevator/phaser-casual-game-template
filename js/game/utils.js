
function setupLocalStorage(label, category) {
	var categoryDefault = '';
	switch (category) {
	case 'bool':
		categoryDefault = BOOLEAN_DEFAULT;
		break;
	case 'string':
		categoryDefault = STRING_DEFAULT;
		break;
	case 'number':
		categoryDefault = NUMBER_DEFAULT;
		break;
	case 'level':
		categoryDefault = MAXLEVEL_DEFAULT;
		break;
	}

	saveLocal(label, getLocal(label) || categoryDefault);
}

function saveLocal(key, data) {
	if (_.isObject(data)) {
		data = JSON.stringify(data);
	}
	
	localStorage.setItem(key, data);
}

function getLocal(key) {
	var data = localStorage.getItem(key);
	if (!_.isNull(data) && data.indexOf('{') === 0) {
		data = JSON.parse(data);
	}

	return data;
}

function getLocalInt(key) {
	return parseInt(getLocal(key));
}

function resetLocalStorage() {
	localStorage.clear();
	initLocalStorage();
}

function backHome() {
	this.state.start('MainMenu');
}