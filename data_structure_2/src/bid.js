create_new_bid = function (current_id) {
    var activities = JSON.parse(localStorage.activities);
    var bid = "竞价" + (activities[current_id].bids.length + 1);
    activities[current_id].bids.push(bid);
    activities[current_id].biddings[bid] = [];
    localStorage.activities = JSON.stringify(activities);
};