transform_bids_to_view_model = function (current_activity) {
    var activities = JSON.parse(localStorage.activities);
    return _.find(activities, function (activity) {
        return activity.name == current_activity
    }).bids
};

transform_biddings_to_view_model = function (current_activity, bidName) {
    var activities = JSON.parse(localStorage.activities);
    var even = _.find(activities, function (activity) {
        return activity.name == current_activity
    }).bids;
    return _.find(even, function (bid) {
        return bid.name == bidName
    }).biddings
};

render_sign_ups = function (current_activity) {
    var activities = JSON.parse(localStorage.activities);
    return _.find(activities, function (activity) {
        return activity.name == current_activity
    }).sign_ups
};