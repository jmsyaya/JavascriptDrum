function removeTransition(e) {
    if (e.propertyName!== 'transform') return;      // propertyName 속성을 가진 css 전환이 완료된 이벤트들의 name이 transform이 아니면 리턴값 반환.
    e.target.classList.remove('playing');       // e -> 이벤트가 발생한 key , playing 제거
}

function playSound(e) {     // data-key를 이용, keyCode 속성을 이용하여 동적으로 타겟을 잡음. 각 변수에 할당.
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;  // 키보드 누를때 마다 audio 출력을 위해 0초로 설정.
    audio.play();   // Play 실행
    key.classList.add('playing');   // key에 classList.add('playing') 추가.
}

const keys = Array.from(document.querySelectorAll('.key'));     // querySelectorAll로 타겟을 잡은 모든 Key는 유사배열로 keys 변수에 할당함.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));   // forEach를 통해 반복하고 css 효과가 끝났을 때 실행 될 removeTransition 함수 작성.
window.addEventListener('keydown', playSound);