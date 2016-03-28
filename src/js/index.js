// Javascript Entry Point

import $ from 'jquery';

var $gameStage = $('.game-stage'); //target area to display quiz questions

var questions = [
  {image: '../images/France.png', 	title: 'What country does this flag represent?', choices: ['Spain', 'France', 'UK', 'Germany'], correct: 'France'},
  {image: '../images/Spain.png', 	title: 'What country does this flag represent?', choices: ['Italy', 'Spain', 'Croatia', 'Ireland'], correct: 'Spain'},
  {image: '../images/EU.png',   	title: 'What country does this flag represent?', choices: ['United Kingdom', 'Belgium', 'Croatia', 'European Union'], correct: 'European Union'},
  {image: '../images/UK.png', 		title: 'What country does this flag represent?', choices: ['United Kingdom', 'Austria', 'Denmark', 'Greece'], correct: 'United Kingdom'},
  {image: '../images/England.png',  title: 'What country does this flag represent?', choices: ['Northern Ireland', 'Belgium', 'Monaco', 'Monaco'], correct: 'England'},
  {image: '../images/Germany.png',  title: 'What country does this flag represent?', choices: ['Switzerland', 'Netherlands', 'Portugal', 'Germany'], correct: 'Germany'},
  {image: '../images/Greece.png',   title: 'What country does this flag represent?', choices: ['Hungary', 'Scotland', 'Greece', 'Czech Republic'], correct: 'Greece'},
  {image: '../images/Ireland.png',  title: 'What country does this flag represent?', choices: ['Poland', 'Ukraine', 'Spain', 'Ireland'], correct: 'Ireland'}
]

var makeQuestions = questions.map(function(item, index){

	var image= item.image;
	var question= item.title;
	var choices= item.choices;
	var [choice1, choice2, choice3, choice4]= choices;

	return `
			<div class="question-box" id="Q${index+1}">
				<h3><span>Question ${index+1}</span></h3>
				<div class="question-area">
				
					<div class="picture"><img src="${image}" height="60px"></div>
					<div class="question">${question}<br>
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

var $buttons = $('button');		   //target submit button
								   //why doesn't the var work if put at top of file?
								   //how does js read the code (order)?
$buttons.click(function(){
	alert('u clicked a button with a function!!');
	console.log('click event');
});

// $buttons.click( ()=>alert('u clicked a button with an arrow function!!! You win.') );







