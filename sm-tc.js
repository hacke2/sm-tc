/**
 * sm-tc.js
 * sm-template-convert @xingmling.wang@shenma-inc.com
 * 很多同学喜欢讲模板写在JS里面便于缓存，
 * HTML模板弄到JS有两种方式：
 * 1.字符串
 * 2.数组
 *=========================================
 * 数组的可维护行好，一般都会使用
 * 但手动吧HTML转为数组很痛苦
 * 所以我写了个插件sm-tc
 * 就是把html转为js数组的
 *=========================================
 * 使用方法：
 *
 * node sm-tc
 *
 * 输入要转的html文件名(不写.html)
 * 输入要生成的js文件名(不写.js)
 *
 * 输出完成
 *=========================================
 * 注意事项：需依赖prompt.js，已在git同目录下
 */

var fs = require('fs'),
	prompt = require('./prompt.js'),
	htmlFileName,jsFileName;

prompt.startStepByStep({
    htmlFileName:getHtmlFileName,
    jsFileName:getJsFileName,
    createTpl : createTpl
});

//这里需要使用resume才会开始触发data事件以及end事件，不然会一直等待
process.stdin.resume()



function getHtmlFileName() {
	prompt.readLine('请输入HTML模板文件名：',function(data){
        // 返回false则表示数据不合法，需要重新输入
        if(!data) return false;
        htmlFileName = data;
        // 数据合法，返回true
        return true;
    },false);
}

function getJsFileName() {
	prompt.readLine('请输入JS文件名：',function(data){
        // 返回false则表示数据不合法，需要重新输入
        if(!data) return false;
        jsFileName = data;
        // 数据合法，返回true
        return true;
    },false);
}

function createTpl() {
	fs.readFile(htmlFileName + '.html',{encoding:'utf-8'}, function(err, data){
		if(err && err.errno == '34'){
			console.log('路径错误!');
		}else if(data){ 
			var htmlArr = data.split('\n'),
				resutl = '';

			for (var i = htmlArr.length - 1; i >= 0; i--) {
				htmlArr[i] = ("'" + htmlArr[i].replace('\r', '') + "'");
			};

			fs.writeFile(jsFileName + '.js',htmlArr.join(',\r'),function(err){
			    console.log('输出' + jsFileName+'成功!');
			    process.exit()
			});
			
			//console.log(htmlArr)

	    }else {
	    	console.log(htmlFileName + '.html文件为空!')
	    	process.exit()
	    }


	});
}