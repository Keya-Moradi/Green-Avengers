$(function() {

    var github_url = "https://api.github.com/users/";
    var url = github_url + github_username;

    var github_data = $.getJSON(url);

    var script_tag = document.querySelector('#github_profile_template');
    var template_string = script_tag.textContent;
    var createProfileStringFromData = _.template(template_string);

    github_data.then(function(data) {
        var github_html = createProfileStringFromData(data);
        console.log(github_html)
        $('body').append(github_html);
    });