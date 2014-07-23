render_bids = function (current_id) {
    var bids = JSON.parse(localStorage.bids);
    return _.filter(bids, function (bid) {
        return bid.activity_id == current_id
    })
};

render_biddings = function (current_id, bidName) {
    var bids = JSON.parse(localStorage.bids);
    var evens = _.filter(bids, function (bid) {
        return bid.activity_id == current_id
    });
    return _.find(evens, function (even) {
        return even.name == bidName
    }).biddings

};

render_sign_ups = function (current_id) {
    var sign_ups = JSON.parse(localStorage.sign_ups);
    return _.filter(sign_ups,function(sign_up){return sign_up.activity_id == current_id})
};