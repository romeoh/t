function action(_data) {
	var  data = _data || {}
		,sexType = data.sexType || null	//boy or girl
		,userName = data.userName || null
		,post = ''

	data.title = '私と芸能人スキャンダルスクープ';
	data.url = 'https://bit.ly/33ymkqU';

	if (sexType == 'boy') {
		database = dataBoy
	} else if (sexType == 'girl') {
		database = dataGirl;
	}
	idx = process(database)
	areaIdx = process(dataArea)
	actionIdx = process(dataAction)
	
	post += '[' + data.title + ']\n\n';
	post += userName + 'さんと' + database[idx] + 'さんがスキャンダルが発生しました。\n\n';
	// 상대연예인
	post += '相手芸人: ' + database[idx] + '\n';
	// 목격장소
	post += '目撃場所: ' + dataArea[areaIdx] + '\n';
	// 당시행동
	post += '唐詩行動: ' + dataAction[actionIdx];
	data.post = post;

	sendData(data);
}

// 여자 연예인 리스트
dataBoy = [
	'新垣結衣',
	'深田恭子',
	'長澤まさみ',
	'橋本かんな',
	'石原さとみ',
	'佐々木希',
	'沢尻エリカ',
	'北川景子',
	'白石麻衣',
	'ローラ',
	'広瀬すず',
	'安室奈美恵',
	'木村文乃',
	'池田エライザ',
	'斎藤明日香',
	'堀北真希',
	'長谷川潤',
	'柴咲コウ',
	'森絵里香',
	'中條彩美'
]

// 남자 연예인 리스트
dataGirl = [
	'山下智久',
	'三浦翔平',
	'岡田准一',
	'GACKT',
	'生田斗真',
	'竹之内豊',
	'藤木直人',
	'伊勢谷祐介',
	'サトタケル',
	'福山雅治',
	'荒玉謙由',
	'長瀬智也',
	'福士蒼太',
	'滝沢秀明',
	'佐藤勝利',
	'岡田将生',
	'水嶋ヒロ',
	'成宮寛貴',
	'松本潤',
	'岩田貴紀'
]

dataArea = [
	'映画館',
	'カフェ',
	'乗用車の中',
	'明洞',
	'江南',
	'ビデオバン',
	'ビリヤード場',
	'酒場',
	'地下鉄',
	'裏通り',
	'家の前',
	'駐車場',
	'カラオケ',
	'ショッピングセンター',
	'空港'
]

dataAction = [
	'手をつないで歩く',
	'一緒にラーメンを食べる',
	'肩を組んで歩く',
	'キスした',
	'抱きしめた',
	'ただ歩いて',
	'写真に写る',
	'言い争い',
	'ただ立っていた',
	'一緒にお酒を飲む',
	'戦った'
]




























