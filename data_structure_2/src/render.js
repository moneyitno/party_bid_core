transform_bids_to_view_model = function (current_id) {
    var activities = JSON.parse(localStorage.activities);
    return activities[current_id].bids
};

transform_biddings_to_view_model = function (current_id, bidName) {
    var activities = JSON.parse(localStorage.activities);
    return activities[current_id].biddings[bidName]
};

render_sign_ups = function (current_id) {
    var activities = JSON.parse(localStorage.activities);
    return activities[current_id].sign_ups
};