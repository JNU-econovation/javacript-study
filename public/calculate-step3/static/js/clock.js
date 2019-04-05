const Clock = {
    timeValue : undefined,
    start : function() {
        this.timeValue = new TimeValue();
        this.setAlarm(11, 11, 11);
        this.intervalID = setInterval(() => this.setClock(), 1000);
    },
    stop : function() {
        if(this.intervalID !== undefined)
            clearInterval(this.intervalID);
    },
    setClock : function() {
        this.timeValue.setValue(new Date());
        Display.updateClockView(this.timeValue);
                        
        if(this.alarm != undefined && this.alarm.compare(this.timeValue))
            this.ring();
    },
    setAlarm : (meridian, hours, minutes, seconds) => {
        this.alarm = new TimeValue(meridian, hours, minutes, seconds);
    },
    ring : () => {
        Display.ring();
    }
}
