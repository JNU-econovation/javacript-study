function TimeValue(meridian=undefined, hours=0, minutes=0, seconds=0){
    this.elapsed = 0;
    this.meridian = meridian;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.setValue = function(now){
        this.hours = now.getHours()
        this.meridian = (this.hours > 12) ? "PM" : "AM";
        this.hours = this.hours % 12;
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();   
    }
    this.updateStopwatchFormat = function() {
        this.hours = parseInt(this.elapsed / (60 * 60));
        this.minutes = parseInt(this.elapsed / 60); 
        this.seconds = parseInt(this.elapsed % 60);
    }
    this.compare = function(meridian, hours, minutes, seconds) {
        if (this.meridian !== meridian)
            return false;
        
        if (this.hours !== hours)
            return false;
            
        if (this.minutes !== minutes)
            return false;
            
        if (this.seconds !== seconds)
            return false;
            
        return true;
    }
}