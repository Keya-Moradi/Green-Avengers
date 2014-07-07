var info = [{
    "username": "davidjfreedman",
    "bg": "http://cdn.siteinspire.com/screengrabs/images/000/003/683/medium.jpg"
}, {
    "username": "robdesousa",
    "bg": "http://a1.dspnimg.com/data/l/2052686975980_bzn9KPlR_l.jpg"
}, {
    "username": "Matthiasak",
    "bg": "http://cdn.siteinspire.com/screengrabs/images/000/003/245/medium.jpg"
}, {
    "username": "Keya-Moradi",
    "bg": "http://a1.dspnimg.com/data/l/1936715834156_aRXG3cWh_l.jpg"
}, {
    "username": "KhalidAdil",
    "bg": "http://a1.dspnimg.com/data/l/385402229381_yQazixSh_l.jpg"
}, {
    "username": "joeybergeron",
    "bg": "http://a1.dspnimg.com/data/l/22eaf34354567ffe9cf9da5a908c51b6_axlbqzhY_l.jpg"
}, {
    "username": "atroppe",
    "bg": "http://a1.dspnimg.com/data/l/915513370065_9BCfryrG_l.jpg"
}, {
    "username": "graym",
    "bg": "http://a1.dspnimg.com/data/l/1848829587299_SiVhlrQ8_l.jpg"
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
