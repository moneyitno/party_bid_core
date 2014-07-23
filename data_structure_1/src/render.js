transform_bids_to_view_model = function(current_activity){
    var activities = JSON.parse(localStorage.activities);
    return _.find(activities,function(activity){return activity.name == current_activity}).bids
};