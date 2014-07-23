function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var activities = JSON.parse(localStorage.activities);
    var phone = sms_json.messages[0].phone;
    sign_up_message(message, phone, activities);
    bid_message(message, phone, activities)
}

sign_up_message = function (message, phone, activities) {
    if (message.search(/bm/i) == 0) {
        var name = message.substr(2);
        signing_up(phone, name, activities);
        not_signing_up(activities);
        localStorage.setItem('activities', JSON.stringify(activities));
    }
};

signing_up = function (phone, name, activities) {
    if (localStorage.is_signing_up) {
        var sign_ups = activities[localStorage.current_activity_id].sign_ups;
        if (!_.find(sign_ups, function (sign_up) {
            return sign_up.phone == phone
        })) {
            sign_ups.unshift({'name': name, 'phone': phone});
        }
    }
};

not_signing_up = function (activities) {
    if (!localStorage.is_signing_up || localStorage.is_signing_up == "false") {
        activities[localStorage.current_activity_id].sign_ups = [];
    }
};

bid_message = function (message, phone, activities) {
    if (message.search(/jj/i) == 0) {
        var price = message.substr(2);
        bidding_start(phone, price, activities);
        bidding_end(activities);
        localStorage.setItem('activities', JSON.stringify(activities));
    }
};

bidding_start = function (phone, price, activities) {
    if (localStorage.is_bidding) {
        var sign_ups = activities[localStorage.current_activity_id].sign_ups;
        if (_.find(sign_ups, function (sign_up) {
            return sign_up.phone == phone
        })) {
            bidding_success(phone, price, activities);
        }
    }
};

bidding_success = function (phone, price, activities) {
    var bids = activities[localStorage.current_activity_id].biddings[localStorage.current_bid];
    if (!_.find(bids, function (bid) {
        return bid.phone == phone
    })) {
        activities[localStorage.current_activity_id].biddings[localStorage.current_bid].unshift({'phone': phone, 'price': price});

    }
};

bidding_end = function (activities) {
    if (!localStorage.is_bidding || localStorage.is_bidding == "false") {
        activities[localStorage.current_activity_id].biddings[localStorage.current_bid] = [];
    }
};