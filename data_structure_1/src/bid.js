create_new_bid = function (activity_name){
    var activities = JSON.parse(localStorage.activities);
    var even = _.find(activities,function(activity){return  activity.name == activity_name});
    even.bids.unshift({'name':"竞价"+(even.bids.length+1),'biddings':[]});
    localStorage.setItem('activities',JSON.stringify(activities));
};