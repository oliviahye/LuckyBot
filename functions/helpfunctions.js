const Discord = require("discord.js");
const Message = Discord.Message;

module.exports = (bot = Discord.Client) => {

    //Help command for General Commands
    generalHelp = function generalHelp(message, prefix, embed) {
        embed.addField(":information_source: Information", `\*\* ${prefix}help\*\* - Shows this list of commands.
\*\* ${prefix}mod\*\* - Shows a list of mod commands.
\*\* ${prefix}userinfo\*\* - Shows a user's information.
\*\* ${prefix}serverinfo\*\* - Shows the server's information.
\*\* ${prefix}botinfo\*\* - Shows Lucky Bot's information.
\*\* ${prefix}trello\*\* - Sends a link to Lucky Bot's trello page.
\*\* ${prefix}github\*\* - Sends a link to Lucky Bot's github page.
\*\* ${prefix}issue\*\* - Please report any issues you are having with Lucky Bot using this command.
\*\* ${prefix}suggestion\*\* - Have a suggestion for Lucky Bot? Use this command to have it heard!`)
    }

    //Help command for Notifications
    notifyHelp = function notifyHelp(message, prefix, embed) {
        embed.addField(":round_pushpin: Notificatons", `\*\* ${prefix}notify\*\* - Shows this list of commands for notifications.
\*\* ${prefix}notify list\*\* - Direct messages a list of keywords for the server.
\*\* ${prefix}notify clear\*\* - Removes all keywords for the server.
\*\* ${prefix}notify add <keyword>\*\* - Adds a <keyword> to notify you about on the server.
\*\* ${prefix}notify remove <keyword>\*\* - Removes a <keyword> you were notified about on the server.
\*\* ${prefix}notify global list\*\* - Direct messages a list of global keywords.
\*\* ${prefix}notify global clear\*\* - Removes all global keywords you have.
\*\* ${prefix}notify global add <keyword>\*\* - Adds a <keyword> to notify you about on all servers.
\*\* ${prefix}notify global remove <keyword>\*\* - Removes a <keyword> you were notified about on all servers.
\*\* ${prefix}notify ignore <channel> <#channel>\*\* - Ignores all keyword triggers in <#channel>.
\*\* ${prefix}notify ignore server\*\* - Ignores all keyword triggers in the server.`)
    }

    //Help command for Custom Commands
    commandsHelp = function commandsHelp(message, prefix, embed) {
        embed.addField(":speech_left: Custom Commands", `\*\* ${prefix}command\*\* - Shows this list of commands for custom commands.
\*\* ${prefix}command list\*\* - Direct messages a list of custom commands on the server.
\*\* ${prefix}command add <name> <command>\*\* - Adds a custom command to the server.
\*\* ${prefix}command remove <name> <command>\*\* - Removes a custom command on the server.
\*\* ${prefix}command edit <name> <command>\*\* - Edits a custom command on the server.`)
    }

    //Help command for Lastfm Commands
    lastFMHelp = function lastFMHelp(message, prefix, embed) {
        embed.addField(":musical_note: Lastfm Commands", `\*\* ${prefix}lastfm help\*\* - Shows this list of commands for lastfm commands.
\*\* ${prefix}lastfm\*\* - Shows basic account info.
\*\* ${prefix}lastfm set\*\* - Saves lastfm username.
\*\* ${prefix}lastfm nowplaying\*\* - Shows the song currently playing.`)
    }

    //Help command for Roles
    rolesHelp = function rolesHelp(message, prefix, embed) {
        embed.addField(":art: Roles", `\*\*+<role> \*\* - Allows user to add the <role>.
\*\*-<role> \*\* - Allows user to remove the <role>.
:warning: When adding and removing roles, names must match role name exactly!`)
    }

    //Mod Help Commands
    //Help for General Mod Commands
    modHelpGeneral = function modHelpGeneral(message, prefix, embed) {
        embed.addField(":exclamation: Basic Commands", `\*\* ${prefix}mod\*\* - Shows this list of commands for mod commands.
\*\* ${prefix}setprefix\*\* - Changes the prefix for Lucky Bot.
\*\* ${prefix}autorole\*\* - Sets a role to be added to a user when they join the server.
\*\* ${prefix}ban <user> [days] [reason]\*\* - Bans a <user> and removes the messages from [days] for [reason]. Days default is 0.     
\*\* ${prefix}kick <user> [reason]\*\* - Kicks a <user> for [reason]`)
    }

    //Help for Welcome Commands
    welcomeHelp = function welcomeHelp(message, prefix, embed) {
        embed.addField("<a:hyperdab:415998364245557259> Welcome Commands", `\*\* ${prefix}welcome\*\* - Shows this list of commands for welcome.
\*\* ${prefix}welcome help\*\* - Shows a detailed list of commands for welcome.
\*\* ${prefix}welcome channel <channel name>\*\* - Sets the channel the bot should welcome new members in.
\*\* ${prefix}welcome message <message>\*\* - Sets the message the bot says when a new member joins. Use {server} for server name and {user} for the new user. Using {mention} makes the username a mention.`)
    }

    //Help for Start Commands
    startHelp = function startHelp(message, prefix, embed) {
        embed.addField(":checkered_flag: Start Commands", `\*\* ${prefix}start\*\* - Shows this list of commands for start.
\*\* ${prefix}start help\*\* - Shows a detailed list of commands for start.
\*\* ${prefix}start roles <channel name>\*\* - Sets the channel for the role system.
\*\* ${prefix}start logs <channel name>\*\* - Sets the channel for message logs.  
\*\* ${prefix}start join <channel name>\*\* - Sets the channel for users joining and leaving. (Message cannot be changed on this)`)
    }

    //Help for Toggle Commands
    toggleHelp = function toggleHelp(message, prefix, embed) {
        embed.addField(":arrows_counterclockwise: Toggle Commands", `\*\* ${prefix}toggle\*\* - Shows this list of commands for toggles.
\*\* ${prefix}toggle image\*\* - Changes between embed disabled for images in message logs.
\*\* ${prefix}toggle logs\*\* - Turns message logs on and off.
\*\* ${prefix}toggle welcome\*\* - Turns welcome messages on and off.`);
    }

    //Help for Server Commands
    ownerServerHelp = function ownerServerHelp(message, prefix, embed) {
        embed.addField(":speech_left: Sever Commands", `\*\* ${prefix}server\*\* - Shows this list of commands for server.
\*\* ${prefix}server list\*\* - Shows the servers Lucky Bot is in.
\*\* ${prefix}server leave\*\* - Allows Lucky Bot to leave a server it is in.
\*\* ${prefix}server settings <serverid>\*\* - Shows enabled settings on <server>. Defaults to current server if no id is provided.`)
    }

    //Help for Relay Commands
    relayHelp = function relayHelp(message, prefix, embed) {
        embed.addField(":arrows_counterclockwise: Relay", `\*\* ${prefix}relay\*\* - Shows this list of commands for relay.
\*\* ${prefix}relay list\*\* - Shows existing relays.
\*\* ${prefix}relay start <name> <type> <chanID1> <chanID2>\*\* - Starts a relay of <type> between at least two channels.
\*\* ${prefix}relay add <name> <chanID>\*\* - Adds a channel to an existing relay.
\*\* ${prefix}relay remove <name> <chanID>\*\* - Removes a channel from an existing relay.
\*\* ${prefix}relay delete <name>\*\* - Deletes an existing relay.`)
    }

    //Sends embed in channel if bot has permission otherwise dms
    sendEmbed = function sendEmbed(message, embed) {
        if (!message.guild.member(bot.user.id).hasPermission("EMBED_LINKS")) {
            message.author.send(embed);
            return;
        } else {
            message.channel.send(embed);
            return;
        }
    }

}