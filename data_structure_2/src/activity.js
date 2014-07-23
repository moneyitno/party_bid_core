function Activity(activity_name) {
    this.name = activity_name;
    this.sign_ups = [];
    this.bids = [];
    this.biddings = {};
}

Activity.prototype.create = function () {
    var activities = JSON.parse(localStorage.activities);
    var activity_ids = JSON.parse(localStorage.activity_ids);
    var activity_id = JSON.stringify(activity_ids.length);
    activity_ids.push(activity_id);
    localStorage.current_activity = activity_id;
    localStorage.setItem('activity_ids', JSON.stringify(activity_ids));
    activities[activity_id] = this;
    localStorage.setItem('activities', JSON.stringify(activities));
};


