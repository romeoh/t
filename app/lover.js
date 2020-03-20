function action(_data) {
	var  data = _data || {}
		,sexType = data.sexType || null	//boy or girl
		,userName = data.userName || null
		,post = ''

	data.title = '私の恋人の条件';
	data.url = 'https://bit.ly/2IZIA3B';

	if (sexType == 'boy') {
		// 씨의 여친의 조건
		data.title = userName + 'さんの彼女の条件';
		face = dataGirlFace[process(dataGirlFace)]
		char = dataCha[process(dataCha)]
		body = dataBody[process(dataBody)]
		//enter = dataGirl[process(dataGirl)]
	} else if (sexType == 'girl') {
		// 씨의 남친의 조건
		data.title = userName + 'さんの彼氏の条件';
		database = dataBoy
		face = dataBoyFace[process(dataBoyFace)]
		char = dataCha[process(dataCha)]
		body = dataBody[process(dataBody)]
		//enter = dataBoy[process(dataBoy)]
	}
	
	post += '[' + data.title + ']\n\n';
	// 키:
	post += '身長: ' + process(140, 200) + 'cm \n';
	// 몸무게
	post += '体重: ' + process(40, 180) + 'kg \n';
	// 미모
	post += '美貌: ' + face + ' \n';
	// 성격
	post += '性格: ' + char + ' \n';
	// 몸매
	post += '体つき: ' + body + ' \n';
	//post += '닮은 연예인: ' + enter['name'];
	data.post = post;

	sendData(data);
}


// 내 여친 얼굴 
dataGirlFace = [
	"最高の美女",
	"すごくきれい",
	"キレイ編",
	"少しきれい",
	"一緒に通える",
	"平凡さ",
	"普通",
	"むしろ性格がいい",
	"金は多い",
	"諦めた"
]

dataCha = [
	"タフさ",
	"バカ",
	"完全にサガジ",
	"優しさ",
	"犬暴れん坊",
	"無邪気",
	"几帳面",
	"バカみたい",
	"小心",
	"超優しい"
]

dataBody = [
	"体つきがいい",
	"すらり",
	"太り",
	"ポカポカ",
	"ただ理解します。",
	"筋肉質",
	"比率がいい",
	"長い長い足"
]


// 내 남친은
dataBoyFace = [
	"すごくかっこいい",
	"超イケメン",
	"彫刻美男",
	"ハンサム",
	"悪くない",
	"どうにか",
	"平凡さ",
	"ブサイク",
	"野暮",
	"はげ頭の老化",
	"老いて見える",
	"幼く見える"
]




























