module.exports = function (bot) {
    var config = Object.merge(
    {
        pattern: '!!',
        welcomeMessage: (
            "Hi, I'm Marvin! A bot run by @Quill to run in {0}. Write `!!/listcommands` to see the commands I can use"
        ).supplant(bot.adapter.link(
            "Web Dev",
            "http://chat.stackexchange.com/rooms/36066"
        )),

        //this is some test key taken from the OpenWeatherMap site
        //it'll work, probably. but replace it with your own, m'kay?
        weatherKey: '44db6a862fba0b067b1930da0d769e98'
    },
        bot.memory.get('config', {})
    );

    bot.memory.set('config', config);
    bot.memory.save('config');

    return config;
};
