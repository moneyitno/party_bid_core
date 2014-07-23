function Activity(activity_name) {
    this.id = "";
    this.name = activity_name;
}

Activity.prototype.create = function () {
    var activities = JSON.parse(localStorage.activities);
    this.id = JSON.stringify(activities.length);
    localStorage.current_activity = JSON.stringify(activities.length);
    activities.unshift(this);
    localStorage.setItem('activities', JSON.stringify(activities));
};