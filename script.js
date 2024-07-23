function startStream() {
    const channelName = document.getElementById('channel-name').value;
    if (channelName) {
        const embed = document.getElementById('twitch-embed');
        embed.innerHTML = ''; // Clear any existing embed
        new Twitch.Embed("twitch-embed", {
            width: "100%",
            height: "100%",
            channel: channelName
        });
    } else {
        alert('Please enter a Twitch channel name.');
    }
}
