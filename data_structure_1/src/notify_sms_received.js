function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    if (message.search(/bm/i) == 0) {
        var activities = JSON.parse(localStorage.activities);
        var name = message.substr(2);
        var phone = sms_json.messages[0].phone;
        var even = _.find(activities, function (activity) {
            return activity.name == localStorage.current_activity
        });
        if (localStorage.is_signing_up) {
            if (!_.find(even.sign_ups, function (sign_up) {
                return sign_up.phone == phone
            })) {
                even.sign_ups.unshift({'name': name, 'phone': phone});
            }
        }
        if (!localStorage.is_signing_up || localStorage.is_signing_up == "false") {
            even.sign_ups = [];
            console.log(even.sign_ups.length)
        }
        localStorage.setItem('activities', JSON.stringify(activities));
    }


}