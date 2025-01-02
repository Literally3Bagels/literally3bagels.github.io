setInterval(async () => {
    const res = await fetch(
        'https://api.lanyard.rest/v1/users/1054919561834672160'
    );
    const req = await res.json();
    let dstat = document.getElementById('dc-stat');
    // noinspection JSUnresolvedReference
    dstat.innerHTML = `[${req.data.discord_status}]`;

    function getPropertyValue(property) {
        return getComputedStyle(document.documentElement).getPropertyValue(`--${property}`);
    }

    const statusColors = {
        online: getPropertyValue('green'),
        idle: getPropertyValue('yellow'),
        dnd: getPropertyValue('red'),
        offline: getPropertyValue('grey')
    };

    // noinspection JSUnresolvedReference
    dstat.style.color = statusColors[req.data.discord_status];
}, 1000);