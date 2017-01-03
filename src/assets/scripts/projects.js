$(document).ready(() => {
    var githubEndpoint = "https://api.github.com/users/jtcho/repos?sort=pushed&type=all&page=1&per_page=4";

    function formatDate(date) {
        var dateString = "";
        dateString += (date.getMonth()+1) + "." + date.getDate() + "." + (date.getFullYear() % 100);
        return dateString;
    }

    $.get(githubEndpoint, (data) => {
        //
        data.forEach((item) => {
            $("#projects").append(`<div class="card"><p>
            <b><a href="${item.html_url}">${item.name}</a></b><br>
            <em>${formatDate(new Date(item.pushed_at))}</em><br>
            ${item.description}</p>`);
        });
    });
});
