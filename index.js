$(function(){
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        var text = $('#shopping-list-entry').val();
        var string = '<li>';
        string += '<span class="shopping-item">';
        string += text;
        string += '</span>';
        string += '<div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> ';
        string += '<button class="shopping-item-delete"><span class="button-label">delete</span></button></div>';
        string += '</li>';
        $('.shopping-list').append(string).val();
    });

    $('.shopping-item-toggle').click(function(){
       $('.shopping-item').toggleClass('shopping-item__checked');


    });

    $('.shopping-item-delete').click(function(){
        $('li').remove();
        


    });

  
});
