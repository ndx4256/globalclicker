//you need jquery
    $(document).ready(function() {

        // sorry
        var lmaowhat = [
            "pretend its a like button",
            "text",
            "Subscribe to StatCounts",
            "Subscribe to Mixerno",
            "subscribe to HEXZD",
            "we can do this gamers",
            "Times this co- you thought i was gonna not put something else here?",
            "1+1 = 2.1335735345348543534",
            "hi",
            "lol",
            "tweet @mixernospace with 20 random emojis",
            "bye"
        ]
        // im even more sorry
        cringe.innerHTML = lmaowhat[Math.floor(Math.random()*lmaowhat.length)]

        setInterval(function() {
            
            var clickcount = 'https://the thing here/api/getdata'
        $.getJSON(clickcount, function(data) {
            clickcnt.innerHTML = data.totalClicks
        });
        }, 2000);
       
//post
        $('#AutoClickerAbuse').click( function() {
            var postclickurl = 'https://the thing here/api/postclick'
            $.post(postclickurl, function(data) {
                console.log("this POST is supposed to be empty")
            });
        });
    });
