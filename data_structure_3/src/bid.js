create_new_bid = function (activity_id) {
    var bids = JSON.parse(localStorage.bids);
    var evens = _.filter(bids, function (bid) {
        return bid.activity_id == activity_id
    });
    bids.unshift({'name': "竞价" + (evens.length + 1), 'activity_id': activity_id, 'biddings': []});
    localStorage.setItem('bids', JSON.stringify(bids));
};