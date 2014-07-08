var info = [{
    "username": "davidjfreedman",
    "bg": "http://a1.dspnimg.com/data/l/1432544597039_0t0RELUq_l.jpg"
}, {
    "username": "robdesousa",
    "bg": "http://a1.dspnimg.com/data/l/2052686975980_bzn9KPlR_l.jpg"
}, {
    "username": "Matthiasak",
    "bg": "http://a1.dspnimg.com/data/l/1667480861921_1fUrCiZf_l.jpg"
}, {
    "username": "Keya-Moradi",
    "bg": "http://a1.dspnimg.com/data/l/1936715834156_aRXG3cWh_l.jpg"
}, {
    "username": "KhalidAdil",
    "bg": "http://a1.dspnimg.com/data/l/385402229381_yQazixSh_l.jpg"
}, {
    "username": "joeybergeron",
    "bg": "http://a1.dspnimg.com/data/l/536094170233_gqnDjoSG_l.jpg"
}, {
    "username": "atroppe",
    "bg": "http://a1.dspnimg.com/data/l/915513370065_9BCfryrG_l.jpg"
}, {
    "username": "graym",
    "bg": "http://a1.dspnimg.com/data/l/1848829587299_SiVhlrQ8_l.jpg"
}, ]

var hulk = 0;

$(function() {
    function initApp() {
        var github_username = info[hulk].username;
        var bgImage = info[hulk].bg;
        var github_url = "https://api.github.com/users/";
        var url = github_url + github_username;

        var github_data = $.getJSON(url).fail(function(){alert("Green Avengers failed to retrieve the URL")});


        var script_tag = document.querySelector('#github_profile_template');
        var template_string = script_tag.textContent;
        var createProfileStringFromData = _.template(template_string);

        github_data.then(function(data) {
            data.background = bgImage;
            var github_html = createProfileStringFromData(data);
            $('.destination')[0].innerHTML = (github_html);

            var leftArrow = $('.leftArrow');
            var rightArrow = $('.rightArrow');



            leftArrow[0].addEventListener("click", leftClick);
            rightArrow[0].addEventListener("click", rightClick);

        })
    }

    initApp();

    function leftClick(event) {
        hulk--;
        if (hulk < 0) {
            hulk = (info.length - 1);
        }
        initApp();
    };

    function rightClick(event) {
        hulk++;
        if (hulk == info.length) {
            hulk = 0;
        }
        initApp();
    };

});
