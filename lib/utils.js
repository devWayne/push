var utils ={
	updateVersion:function(version,tag){
			var tag = tag || 'z';
			var verList = version.split('.');
			//console.log(verList);
			tag == 'z'?verList[2]++:tag=='y'?verList[1]++:tag=='z'?verList[0]++:verList[2]++;
			var _version = verList.join('.');
			//console.log(_version);
			return _version;
	}
}

module.exports = utils;
