function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var sign_ups = JSON.parse(localStorage.sign_ups);
    var phone = sms_json.messages[0].phone;
    sign_up_message(message, phone, sign_ups);
    bid_message(message, phone);
}

sign_up_message = function (message, phone, sign_ups) {
    if (message.search(/bm/i) == 0) {
        var name = message.substr(2);
        signing_up(phone, name, sign_ups);
        localStorage.sign_ups = JSON.stringify(sign_ups);
        not_signing_up();
    }
};

signing_up = function (phone, name, sign_ups) {
    if (localStorage.is_signing_up) {
        if (!_.find(sign_ups, function (sign_up) {
            return sign_up.phone == phone
        })) {
            sign_ups.unshift({'name': name, 'phone': phone, 'activity_id': localStorage.current_activity });
        }
    }
};

not_signing_up = function () {
    if (!localStorage.is_signing_up || localStorage.is_signing_up == "false") {
        localStorage.sign_ups = "[]";
    }
};

bid_message = function (message, phone) {
    if (message.search(/jj/i) == 0) {
        var price = message.substr(2);
        bidding_start(phone, price);
    }
};

bidding_start = function (phone, price) {
    if (localStorage.is_bidding) {
        var sign_ups = JSON.parse(localStorage.sign_ups);
        var evens = _.filter(sign_ups, function (sign_up) {
            return sign_up.activity_id == localStorage.current_activity
        });
        if (_.find(evens, function (num) {
            return num.phone == phone
        })) {
            var name = _.find(evens, function (num) {
                return num.phone == phone
            }).name;
            bidding_success(phone, price, name);
        }
    }
};

bidding_success = function (phone, price, name) {
    var bids = JSON.parse(localStorage.bids);
    if (!_.find(bids[0].biddings, function (num) {
        return num.phone == phone
    })) {
        bids[0].biddings.unshift({'phone': phone, 'price': price, 'name': name});
    }
    localStorage.bids = JSON.stringify(bids);
};