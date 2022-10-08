const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温 摂氏-1度 で外はとても寒かった。:insertx: は出掛けて行き、しばらくすると :inserty: についた。 :insertz:、300ポンドの :insertx: はとても驚いた。しかし、 太郎 は驚かなかった。 :inserty: ではよくあることだった。';
const insertX = ['キティ', 'マイメロディ', 'シナモロール'];
const insertY = ['ディズニーランド', 'サンリオピューロランド', '東京ドームシティ'];
const insertZ = ['雪が降っており', '混雑しており', 'ガラガラで'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('太郎', name);
  }

  if (document.getElementById("jp").checked) {
    const weight = `${Math.round(300*0.0714286)}kg`;
    const temperature =  `華氏 ${Math.round((94-32) * 5 / 9)}度`;
    newStory = newStory.replace('摂氏-1度', temperature);
    newStory = newStory.replace('300ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
