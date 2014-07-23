transform_bids_to_view_model = function(current_id){
    var activities = JSON.parse(localStorage.activities);
    return activities[current_id].bids
};
