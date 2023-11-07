'use strict'

{
  const question = document.querySelector('span');
  const time = document.getElementById('time');
  const missType = document.getElementById('miss-type');
  const enc = document.getElementById('encouragment');
  const btn = document.querySelector('button');
  


  const words = [
    'ultra-soul',
    'home',
    'c\'mon', 
    'alone',
    'run',
    'zero',
    'oh!-girl'
  ];

  const encouragements = [
    'いい感じ！？',
    '早さよりも正確さ',
    'もういっちょ行きましょう！'
  ];

  const  bgm = new Audio('laser2.mp3');
  let currentWord;
  let loc = 0;
  let miss = 0;
  let startTime;
  let endTime;
  let elapsedSec;
  
  



  // スタート
  document.addEventListener('keydown', (e) => {
    if (e.key === ' ' && words.length === 7) {
      set();
      startTime = new Date().getTime();      
    }

  });

  // タイピング
  document.addEventListener('keydown', (e) => {
    if (e.key !== currentWord[loc] && e.key !== ' ' && e.key !== 'Shift') {
      miss++;
      bgm.play();
    } else if (e.key === currentWord[loc]) {  
      let newcurrentWord;
      loc++;
      newcurrentWord = currentWord.slice(loc);
      question.textContent = newcurrentWord;
      if (newcurrentWord.length < 1) {
        set();
      }
    }
  }
  );

  btn.addEventListener('click', () => {
    location.reload();
  });

  const set = () => {
    currentWord = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    question.textContent = currentWord;
    question.classList.add('big');
    loc = 0;


    if (words.length < 1) {
      endTime = new Date().getTime();
      elapsedSec = (endTime - startTime) / 1000;

      question.classList.add('hide');
      missType.textContent = `ミスタイプ${miss}回！`;
      time.textContent = `タイム ${elapsedSec}秒！！`;

      enc.textContent = encouragements[Math.floor(Math.random() * encouragements.length)];

      btn.classList.remove('hide');
    }
  }
 




}