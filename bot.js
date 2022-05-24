
var SUBJ_CD = ''; // co
var LECT_NUMB = ''; // no

var handler = setInterval(function() {
    fetch('https://for-s.seoultech.ac.kr/JSONMain', {
        method: 'POST',
        body: JSON.stringify({
			'SUBJ_CD': SUBJ_CD,
            'LECT_NUMB': LECT_NUMB,
            'fsp_action': 'MainAction',
            'fsp_cmd': 'requestSugangBasket'
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest'
		},
    })
    .then(function (response) {
        if(!response.ok) {
            throw Error('Fail');
        }
        return response.json()
    })
    .then(function (response) {
        if(response.ErrorCode === '0') {
            clearInterval(handler);
            console.log('수강신청 성공');
        } else {
            console.log(response.ErrorMsg);
        }
    })
    .catch(function (error) {

    })
}, 100);
