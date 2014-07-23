render_bids = function (current_id) {
    var bids = JSON.parse(localStorage.bids);
    return _.filter(bids,function(bid){return bid.activity_id == current_id})
};