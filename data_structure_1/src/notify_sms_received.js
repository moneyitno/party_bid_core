function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var activities = JSON.parse(localStorage.activities);
    var phone = sms_json.messages[0].phone;
    var even = _.find(activities, function (activity) {
        return activity.name == localStorage.current_activity
    });
    if (message.search(/bm/i) == 0) {
        var name = message.substr(2);
        if (localStorage.is_signing_up) {
            if (!_.find(even.sign_ups, function (sign_up) {
                return sign_up.phone == phone
            })) {
                even.sign_ups.unshift({'name': name, 'phone': phone});
            }
        }
        if (!localStorage.is_signing_up || localStorage.is_signing_up == "false") {
            even.sign_ups = [];
        }
        localStorage.setItem('activities', JSON.stringify(activities));
    }

    if (message.search(/jj/i) == 0) {
        var price = message.substr(2);
        if (localStorage.is_bidding) {
            var eve = _.find(even.sign_ups, function (sign_up) {
                return sign_up.phone == phone
            });
            if (eve) {
                even.bids[0].biddings.unshift({'name': eve.name, 'phone': phone, 'price': price})
            }
            if (!eve) {
                even.bids[0].biddings = [];
            }
        }
        if (localStorage.is_bidding == "false" || !localStorage.is_bidding) {
            even.bids[0].biddings = [];
        }
        localStorage.setItem('activities', JSON.stringify(activities));
    }


}