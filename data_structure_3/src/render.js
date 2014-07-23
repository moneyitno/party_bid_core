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