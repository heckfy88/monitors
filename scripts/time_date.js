window.addEventListener("load", () => {
    clock();

    function clock() {
        const today = new Date();

        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();

        const formatted_hour = today.getHours() < 10 ? "0" + hours : hours;
        const formatted_minutes = today.getMinutes() < 10 ? "0" + minutes : minutes;
        const formatted_seconds = today.getSeconds() < 10 ? "0" + seconds : seconds;

        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();

        const monthList = [
            "ינואר",
            "פברואר",
            "מרץ",
            "אפריל",
            "מאי",
            "יוני",
            "יולי",
            "אוגוסט",
            "ספטמבר",
            "אוקטובר",
            "נובמבר",
            "דצמבר"
        ];

        //get current date and time
        const date = monthList[month] + " " + day + ", " + year;
        const time = formatted_hour + ":" + formatted_minutes + ":" + formatted_seconds;

        //combine current date and time

        //print current date and time to the DOM
        document.getElementById("date").innerHTML = date;
        document.getElementById("time").innerHTML = time;
        setTimeout(clock, 1000);
    }
});