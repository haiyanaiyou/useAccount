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
//移除邮箱和密码选项
//require true为必选项
//placeholder为占位符提示，如果没有提示 就是" "代替
AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
	{
		_id:'username',
		type:'text',
		require:true,
		displayName:'username',
		placeholder:''

	},
	{
		_id:'password',
		type:'password',
		require:true,
		displayName:'密码',
		placeholder:'',
		re:/^[a-z]{6,}$/,
		errStr:'6位以上小写字母'

	},
	{
		_id:'password_again',
		type:'password',
		require:true,
		displayName:'密码确认',
		placeholder:'',
		re:/^[a-z]{6,}$/,
		errStr:'6位以上小写字母'

	},
	{
		_id:'phone',
		type:'text',
		require:true,
		displayName:'手机（可选的）',
		placeholder:''

	}]);