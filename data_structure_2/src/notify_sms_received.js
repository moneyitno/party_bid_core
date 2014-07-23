function notify_sms_received(sms_json) {
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    var activities = JSON.parse(localStorage.activities);
    var phone = sms_json.messages[0].phone;
    sign_up_message(message, phone, activities);
}

sign_up_message = function (message, phone, activities) {
    if (message.search(/bm/i) == 0) {
        var name = message.substr(2);
        signing_up(phone, name, activities);
        localStorage.setItem('activities', JSON.stringify(activities));
    }
};

signing_up = function (phone, name, activities) {
    if (localStorage.is_signing_up) {
        var sign_ups = activities[localStorage.current_activity_id].sign_ups;
        if(!_.find(sign_ups,function(sign_up){return sign_up.phone == phone})){
            sign_ups.unshift({'name': name, 'phone': phone});
        }
    }
};