const StopwatchState = Object.freeze({
    "stop" : 1,
    "work": 2,
});

const Stopwatch = {
    currentState: StopwatchState.work,
    start : function(){
        this.timeValue = new TimeValue(meridian="ST");
        this.currentState = StopwatchState.work;
        this.beginToincrease();
    },
    stop : function(){
        if(this.currentState !== StopwatchState.work)
            return;
            
        clearInterval(this.intervalID);
        this.currentState = StopwatchState.stop;
    },
    reset : function(){
        if(this.currentState !== StopwatchState.stop)
            return;
        
        this.currentState = StopwatchState.work;    
        this.beginToincrease();
    },
    beginToincrease : function() {
        if(this.intervalID !== undefined)
            clearInterval(this.intervalID);
        this.intervalID = setInterval( () => {
            this.timeValue.elapsed += 1;
            this.timeValue.updateStopwatchFormat();
            Display.updateClockView(this.timeValue);
        }, 1000);
    },
}
