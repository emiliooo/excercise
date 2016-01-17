$(document).ready(function() {

    $('li:first-child').on('click', function(){
        var aa = $(this);
        if( !aa.is('.checked')){
            aa.addClass('checked');
            $('#checkbox_yoda').prop('checked', true);
        } else {
            aa.removeClass('checked');
            $('#checkbox_yoda').prop('checked', false);
        }
    });

    $('li:nth-child(2)').on('click', function(){
        var bb = $(this);
        if( !bb.is('.checked')){
            bb.addClass('checked');
            $('#checkbox_trooper').prop('checked', true);
        } else {
            bb.removeClass('checked');
            $('#checkbox_trooper').prop('checked', false);
        }
    });

    $('li:last-child').on('click', function(){
        var cc = $(this);
        if( !cc.is('.checked')){
            cc.addClass('checked');
            $('#checkbox_vader').prop('checked', true);
        } else {
            cc.removeClass('checked');
            $('#checkbox_vader').prop('checked', false);
        }
    });

    $( "#target" ).submit(function( event ) {
        alert( "Handler for .submit() called." );
        event.preventDefault();
    });

    $('button').click(function(){

            if ($('#checkbox_yoda').is(':checked')) {
                $('form').attr('action', 'https://www.youtube.com/watch');
            }
             else if($('#checkbox_trooper').is(':checked') || $('#checkbox_vader').is(':checked') )
            {
                $('form').attr('action', 'imperial_march.mp3');
            }
            else if($('#checkbox_trooper').is(':checked') || $('#checkbox_vader').is(':checked') )
            {
                $('form').attr('action', 'imperial_march.mp3');
            }
            else if($('#checkbox_yoda').is(':checked') && $('#checkbox_trooper').is(':checked') )
            {
                $('form').attr('action', 'https://www.youtube.com/watch');
            }
            else if($('#checkbox_trooper').is(':checked') && $('#checkbox_vader').is(':checked') )
            {
                $('form').attr('action', 'imperial_march.mp3');
            }
            else if($('#checkbox_yoda').is(':checked') && $('#checkbox_vader').is(':checked') )
            {
                $('form').attr('action', 'https://www.youtube.com/watch');
            }
            else if($('#checkbox_yoda').is(':checked') && $('#checkbox_trooper').is(':checked') && $('#checkbox_vader').is(':checked'))
            {
                $('form').attr('action', 'https://www.youtube.com/watch');
            }
            else{
                $('form').attr('action', 'https://www.youtube.com/watch');
            }
    });


    $("button").mouseenter(function() {
        $("button").addClass("buttonColor");
    });
    $("button").mouseleave(function() {
        $("button").removeClass("buttonColor");
    });

});