var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()

var textbox = $("#ar-txt")

var instructions = $("#status")

var content = ''

recognition.continuous = true

recognition.lang='ar';

// recognition is started

recognition.onstart = function() {

 instructions.text("يجري التعرف على الصوت")

}

recognition.onspeechend = function() {

 instructions.text("لا يوجد نشاط")

}

recognition.onerror = function() {

 instruction.text("حاول مجدداً")

}

recognition.onresult = function(event) {

 var current = event.resultIndex;

 var transcript = event.results[current][0].transcript



 content += transcript

 textbox.val(content)

}

$("#startbtn").click(function(event) {

 recognition.start()

})

textbox.on('input', function() {

 content = $(this).val()

})
