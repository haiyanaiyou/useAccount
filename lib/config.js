if(Meteor.isClient){
	Meteor.startup(function(){
		// T9n.setLanguage("zh-CN");
		//获取浏览器当前的语言编码
		var lang=window.navigator.language||window.navigator.userLanguage;
		console.log(lang);
		lang=lang.toLowerCase();
		T9n.setLanguage(lang);
	});

}