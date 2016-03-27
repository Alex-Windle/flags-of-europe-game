// Javascript Entry Point

import $ from 'jquery';

var $gameStage = $('.game-stage');

var questions = [
  {image: "http://www.vexillologymatters.org/images/france.png", title: 'What country does this flag represent?', choices: ['France', 'Spain', 'UK', 'Germany'], correct: 'France'},
  {image: "http://flagsoftheworld.co.uk/media/catalog/product/cache/1/thumbnail/600x600/9df78eab33525d08d6e5fb8d27136e95/i/r/ireland-flag_2.gif", title: 'What country does this flag represent?', choices: ['Italy', 'Malta', 'Croatia', 'Ireland'], correct: 'Ireland'}
]

var makeQuestions = questions.map(function(item, index){

	var image= item.image;
	var question= item.title;
	var choices= item.choices;
	var [choice1, choice2, choice3, choice4]= choices;

	return `
			<div id="Q${index+1}">
				<h1><span>Question ${index+1}</span></h1>
				<div class="question-area">
				<div>
					<img src="${image}" height="60px">
					<div class="question">${question}</div><br>
						<label>
							<input type="radio" name="question${index+1}" value="${choice1}">
							${choice1}
						</label><br>
						<label>
							<input type="radio" name="question${index+1}" value="${choice2}">
							${choice2}
						</label><br>
						<label>
							<input type="radio" name="question${index+1}" value="${choice3}">
							${choice3}
						</label><br>
						<label>
							<input type="radio" name="question${index+1}" value="${choice4}">
							${choice4}
						</label><br><br>

					<button>Submit</button><br>
				</div>
				</div>
			</div>
		   `;
});

makeQuestions.forEach(function(question){
	$gameStage.append(question);
});

$('button').click(function() {
  var answer = $('${question}:checked').val();
  alert(answer);
});





