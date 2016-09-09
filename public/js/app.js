// forked from a codepen by Paul Sullivan (http://codepen.io/pwsm50/pen/VjdoaP)
// TODO fix his bug that resets the score after three clicks and post to his comments on codepen

 Selecting number of players
$('#option1').click(function() {
   $('.wrap:nth-child(n+2)').attr('style', 'display:none;');
});

$('#option2').click(function() {
   $('.wrap').addClass('p-2');
   $('.wrap:nth-child(n+3)').attr('style', 'display:none;');
});

$('#option3').click(function() {
   $('.wrap').addClass('p-3');
   $('.wrap:nth-child(4)').attr('style', 'display:none;');
});

$('#option4').click(function() {
   $('.wrap').addClass('p-4');
});

// Hide Settings window when clicking an option
$('.option').click(function() {
   $('.settings').attr('style', 'display:none;');
});


// Tapping each score number adds to score level
scoreLevel = ['one', 'two', 'three'];
i = 0;

while (i < 3) {
   
   $('.' + scoreLevel[ i ]).click(function() {
      $(this).addClass('active');
   });
   i++;
};

// Non-functioning loop for reset after tapping score 4th time. Not sure why it's not working... If you happen to know, leave it in a comment? ^_^
// 
scoreNum = ['m-one', 'm-two', 'm-three', 'm-four', 'm-five', 'm-six', 'm-seven'];

i = 0;
while (i < 7) {
   $('.' + scoreNum[ i ] + ' .reset').click(function() {
      $('.' + scoreNum[ i ] + ' .one').removeClass('active');
      $('.' + scoreNum[ i ] + ' .two').removeClass('active');
      $('.' + scoreNum[ i ] + ' .three').removeClass('active');
   });
   i++;
};


// Reset after tapping score 4th time
$('.m-one .reset ').click(function() {
   $('.m-one .one').removeClass('active');
   $('.m-one .two').removeClass('active');
   $('.m-one .three').removeClass('active');
});

$('.m-two .reset').click(function() {
   $('.m-two .one').removeClass('active');
   $('.m-two .two').removeClass('active');
   $('.m-two .three').removeClass('active');
});

$('.m-three .reset').click(function() {
   $('.m-three .one').removeClass('active');
   $('.m-three .two').removeClass('active');
   $('.m-three .three').removeClass('active');
});

$('.m-four .reset').click(function() {
   $('.m-four .one').removeClass('active');
   $('.m-four .two').removeClass('active');
   $('.m-four .three').removeClass('active');
});

$('.m-five .reset').click(function() {
   $('.m-five .one').removeClass('active');
   $('.m-five .two').removeClass('active');
   $('.m-five .three').removeClass('active');
});

$('.m-six .reset').click(function() {
   $('.m-six .one').removeClass('active');
   $('.m-six .two').removeClass('active');
   $('.m-six .three').removeClass('active');
});

$('.m-seven .reset').click(function() {
   $('.m-seven .one').removeClass('active');
   $('.m-seven .two').removeClass('active');
   $('.m-seven .three').removeClass('active');
});
