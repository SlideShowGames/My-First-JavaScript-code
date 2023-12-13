javascript:(function() {
    var type = prompt("Do you want Confirm or Alert? Case sensitive");
    var text = prompt("What do you want Chrome to say?");
    var delay1 = prompt("What should the delay be? 0 for no delay.");
    if (type === "Alert") {
        setTimeout(() => {
            alert(text);
        }, delay1);
    } else {
        setTimeout(() => {
            confirm(text);
        }, delay1);
    }
})();
