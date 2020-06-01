new Twitch.Embed("twitch-embed", {
    width: "100%",
    height: "100%",
    channel: "sinatraa",
    layout: "video",
    autoplay: false,
});

$Lightning.use("c:ldlol_lightningout_app", function () {
    $Lightning.createComponent("c:ldlol_signup", {},
        "lightning",
        function (cmp) {
            console.log("LWC component was created");
            // do some stuff
        }
    );
},
    "https://lockdownlol-developer-edition.um1.force.com/"
);

