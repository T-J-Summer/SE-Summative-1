const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('answer') == 'MPH') {
    document.getElementById("answer").innerHTML = '🚄 Thats Right !'
} else
{document.getElementById('answer').innerHTML = '🚂 Not quite right'}