$(document).ready(() => {
    var githubEndpoint = "https://api.github.com/users/jtcho/repos?sort=updated&type=all&page=1&per_page=4";

    function formatDate(date) {
        var dateString = "";
        dateString += (date.getMonth()+1) + "." + date.getDate() + "." + (date.getFullYear() % 100);
        return dateString;
    }

    $.get(githubEndpoint, (data) => {
        //
        console.log(data);
        data.forEach((item) => {
            console.log(item);
            // $("#projects").append("<div class=\"card\"><p>" +
            //     "<b><a href='" + item.html_url + "'>" + item.name + "</a></b><br>" +
            //     "<em>" + new Date(item.updated_at).toISOString().slice(0, 10) + "</em>" +
            //     "</p></div>");
            $("#projects").append(`<div class="card"><p>
            <b><a href="${item.html_url}">${item.name}</a></b><br>
            <em>${formatDate(new Date(item.updated_at))}</em><br>
            ${item.description}</p>`);
        });
    });
});
