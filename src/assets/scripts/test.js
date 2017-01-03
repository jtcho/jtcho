
$(document).ready(() => {
    console.log("Page loaded.");
    var blogFeedEndpoint = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27" +
        "http%3A%2F%2Fblog.jtcho.me%2Frss%2F%27%20and%20xpath%3D%27%2F%2Fitem%27%20limit%205&format=json";
    $.get(blogFeedEndpoint, (data) => {
        //
    });
});
