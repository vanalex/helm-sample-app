module.exports = {
    main: (req, res) => {
        res.type('html')
        res.send(`<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<title>Welcome to Alex's express.js example</title>
</head>
<body>
    <h3>Hi, thanks for using my Express.js lab 👏</h3>
    <p>If you found it useful, <a href="https://github.com/vanalex/">view my other GitHub projects</a> today 👑</p>
    <p>Results from <quote>GET <a href="/links">/links</a></quote>:</p>
    <div id="links">
    </div>
    <script>
    $(document).ready(function(){
        $.get("/links", function(data, status){
            var res = "<ul>";
            var links = data;
            for(var i=0; i < links.length; i++) {
                res += "<li><a href=" + links[i].url + ">" + links[i].name + "</a></li>"
            }
            $("#links").html(res)
        });
    });
    </script>
    </body>
</html>
`);
    },
    links: (req, res) => {
        res.type("json")
        res.send(
            [
                {
                    "name": "github",
                    "url": "https://github.com/vanalex"
                }
            ])
    },
    health: (req, res) => {
        res.send("OK");
    }
}