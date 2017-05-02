console.log('loaded js')
$(document).ready(function() {
    $('#newimage').click(function() {
        console.log('clickity clack');
        $.ajax({
            url: '/getpic',
            type: 'GET',
            success: function(photo) {
                var newpic = JSON.parse(photo);
                $('#bigpicture').attr('src', newpic.urls.small);
            }
        });
    });
})
