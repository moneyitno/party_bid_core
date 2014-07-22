function notify_sms_received(sms_json){
    var message = sms_json.messages[0].message.replace(/\s/g, "");
    if(message.search(/bm/i) == 0){
        var activities = JSON.parse(localStorage.activities);
        var name = message.substr(2);
        var phone = sms_json.messages[0].phone;
        var even = _.find(activities,function(activity){return activity.name == localStorage.current_activity});
        even.sign_ups.unshift({'name':name,'phone':phone});
        localStorage.setItem('activities',JSON.stringify(activities));
    }
}