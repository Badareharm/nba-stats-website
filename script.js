function fetchStats() {
    const year = document.getElementById("year").value;
    const mode = document.getElementById("mode").value;

    document.getElementById("stats").innerHTML = `Fetching stats for ${year}, Mode: ${mode}...`;

    // Here we'll add API calls later
}
