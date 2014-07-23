function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var activities = JSON.parse(localStorage.activities);
    var phone = sms_json.messages[0].phone;
    var even = _.find(activities, function (activity) {
        return activity.name == localStorage.current_activity
    });
    sign_up_message(message, even, phone, activities);
    bid_message(message, even, phone, activities);
}

sign_up_message = function (message, even, phone, activities) {
    if (message.search(/bm/i) == 0) {
        var name = message.substr(2);
        signing_up(even, phone, name);
        not_signing_up(even);
        localStorage.setItem('activities', JSON.stringify(activities));
    }
};

signing_up = function (even, phone, name) {
    if (localStorage.is_signing_up) {
        if (!_.find(even.sign_ups, function (sign_up) {
            return sign_up.phone == phone
        })) {
            even.sign_ups.unshift({'name': name, 'phone': phone});
        }
    }
};

not_signing_up = function (even) {
    if (!localStorage.is_signing_up || localStorage.is_signing_up == "false") {
        even.sign_ups = [];
    }
};

bid_message = function (message, even, phone, activities) {
    if (message.search(/jj/i) == 0) {
        var price = message.substr(2);
        bidding_start(even, phone, price);
        bidding_end(even);
        localStorage.setItem('activities', JSON.stringify(activities));
    }
};

bidding_end = function (even) {
    if (localStorage.is_bidding == "false" || !localStorage.is_bidding) {
        even.bids[0].biddings = [];
    }
};

bidding_start = function (even, phone, price) {
    if (localStorage.is_bidding) {
        var eve = _.find(even.sign_ups, function (sign_up) {
            return sign_up.phone == phone
        });
        bidding_success(eve, even, phone, price);
        bidding_fail(eve, even);
    }
};

bidding_success = function (eve, even, phone, price) {
    if (eve) {
        if (!_.find(even.bids[0].biddings, function (bidding) {
            return bidding.phone == phone
        })) {
            even.bids[0].biddings.unshift({'name': eve.name, 'phone': phone, 'price': price})
        }
    }
};

bidding_fail = function (eve, even) {
    if (!eve) {
        even.bids[0].biddings = [];
    }
};