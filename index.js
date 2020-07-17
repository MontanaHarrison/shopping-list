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

    $('.shopping-list').on('click', '.shopping-item-toggle', function(){
       $(this).closest('li').toggleClass('shopping-item__checked');
    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(){
       $(this).closest("li").remove();
    });
});
