function action(_data) {
	var  data = _data || {}
		,sexType = data.sexType || null	//boy or girl
		,userName = data.userName || null
		,post = ''

	data.title = '私の前世調べ';
	data.url = 'https://bit.ly/39aDuvU';

	sexIdx = process(dataSex)
	born = process(1000, 1900)
	life = process(15, 100)
	die = born + life

	jobIdx = process(dataJob)
	dieIdx = process(dataDie)
	
	post += '[' + data.title + ']\n\n';
	post += userName + 'さんの前世は' + dataSex[sexIdx] + 'でした。\n';
	post += born + '年生まれで' + die + '年に亡くなりました。\n';
	post += '職業は' + dataJob[jobIdx] +'で、\n';
	post += '死亡原因は' + dataDie[dieIdx];
	data.post = post;

	sendData(data);
}


dataSex = [
	'男',
	'女'
]

dataJob = [
	'農民',
	'農奴',
	'召使',
	'サノビ',
	'医院',
	'白丁',
	'君主',
	'兵士',
	'法師',
	'戦士',
	'武士',
	'刺客',
	'弓手',
	'ヒーラー',
	'ディーラー',
	'皇帝',
	'王',
	'隣の犬'
]

dataDie = [
	'病気で死にました。',
	'浮気をして殴られて死にました。',
	'戦場で敵軍の刃で死にました。',
	'反逆を起こして殺されました。',
	'老いて死にました。',
	'愛が叶わず恋煩いで死にました。',
	'笑っていて、おかしくなりました',
	'お腹がすいて死にました。',
	'イライラして死にました。',
	'疲れて死にました。',
	'友達が裏切りに遭いました。',
	'殴られて死にました。',
	'盗みをしてばれて死にました。',
	'国を救うために死にました。',
	'路上で客死しました。',
	'犬にかまれて死にました。',
	'ライオンにかまれて死にました。',
	'寝て楽に死にました。',
	'水虫でかゆくて死にました'
]




























