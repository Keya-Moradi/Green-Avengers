var info = [{
    "username": "davidjfreedman",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, {
    "username": "robdesousa",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, {
    "username": "Matthiasak",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, {
    "username": "Keya-Moradi",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, {
    "username": "KhalidAdil",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, {
    "username": "joeybergeron",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, {
    "username": "atroppe",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, {
    "username": "graym",
    "bg": "https://s3.amazonaws.com/uploads.hipchat.com/31349/921543/pzK8cBdoxyrm95D/upload.png"
}, ]

$(function() {
    var github_username = "graym";
    var github_url = "https://api.github.com/users/";
    var url = github_url + github_username;

    var github_data = $.getJSON(url);

    var script_tag = document.querySelector('#github_profile_template');
    var template_string = script_tag.textContent;
    var createProfileStringFromData = _.template(template_string);

    github_data.then(function(data) {
        var github_html = createProfileStringFromData(data);
        $('body').append(github_html);
    })
});

var leftArrow = $('.leftArrow');

function callback(event) {
    console.log(event.type);
};


leftArrow.addEventListener("click", callback);
