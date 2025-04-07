const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('answer') == 'LorML') {
    document.getElementById("answer").innerHTML = "☕️ That's Right !"
} else
{document.getElementById('answer').innerHTML = '🥤 Not quite right'}