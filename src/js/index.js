// Javascript Entry Point

import $ from 'jquery';

var $gameStage = $('.game-stage');

var questions = [
  {title: 'What country does this flag represent?', choices: ['Spain', 'France', 'UK', 'Germany'], correct: 'France'},
  {title: 'What country does this flag represent?', choices: ['Italy', 'Spain', 'Croatia', 'Ireland'], correct: 'Spain'},
  {title: 'What country does this flag represent?', choices: ['United Kingdom', 'Belgium', 'Croatia', 'European Union'], correct: 'European Union'},
  {title: 'What country does this flag represent?', choices: ['United Kingdom', 'Austria', 'Denmark', 'Greece'], correct: 'United Kingdom'},
  {title: 'What country does this flag represent?', choices: ['Northern Ireland', 'Belgium', 'Monaco', 'Monaco'], correct: 'England'},
  {title: 'What country does this flag represent?', choices: ['Switzerland', 'Netherlands', 'Portugal', 'Germany'], correct: 'Germany'},
  {title: 'What country does this flag represent?', choices: ['Hungary', 'Scotland', 'Greece', 'Czech Republic'], correct: 'Greece'},
  {title: 'What country does this flag represent?', choices: ['Poland', 'Ukraine', 'Spain', 'Ireland'], correct: 'Ireland'}
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

$('button').on('click', () => {
  var answer = $('.question:checked').val();
  alert(answer);
});





