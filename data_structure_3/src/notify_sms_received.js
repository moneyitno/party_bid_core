function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var sign_ups = JSON.parse(localStorage.sign_ups);
    var phone = sms_json.messages[0].phone;

    sign_up_message(message, phone, sign_ups);
}

sign_up_message = function (message, phone, sign_ups) {
    if (message.search(/bm/i) == 0) {
        var name = message.substr(2);
        signing_up(phone, name, sign_ups);
        localStorage.setItem('sign_ups', JSON.stringify(sign_ups));
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