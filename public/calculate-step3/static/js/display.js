const Functions = Object.freeze({
   "clock" :1,
   "stopwatch":2,
});

const Display = {
    currentFunction : Functions.clock,
    initialize : function() {
        this.meridian = document.getElementById('meridian');
        this.stopwatchLabel = document.getElementById('stopwatch-label')
        this.timeField = document.getElementById('time');
        
        this.stopwatchStartButton = document.getElementById('stopwatch-start');
        this.stopwatchStopButton = document.getElementById('stopwatch-stop');
        this.toggleFunctionButton = document.getElementById('toggle-function');
        
        this.displayClock();
    },
    updateClockView : function(timeValue){
        const clockFormatTimeValue = this.addZeroPaddingForClockFormat(timeValue.meridian,
                                                            timeValue.hours, 
                                                            timeValue.minutes, 
                                                            timeValue.seconds);
        
        this.meridian.innerHTML = clockFormatTimeValue.meridian;
        this.timeField.innerHTML = clockFormatTimeValue.hours + ":" + 
                                clockFormatTimeValue.minutes + ":" + 
                                clockFormatTimeValue.seconds;
    },
    addZeroPaddingForClockFormat : function(meridian, hours, minutes, seconds) {
        hours = this.addZeros(hours, 2);
        minutes = this.addZeros(minutes, 2);
        seconds = this.addZeros(seconds, 2);
        
        return new TimeValue(meridian, hours, minutes, seconds);
    },
    addZeros : (num, digit) => {
        num = num.toString();
        if(num.length < digit)
            num = "0" + num;
        return zero + num;
    },
    ring : () => {
        alert("ring ring");
    },
    toggleStopwatchButton : function() {
        if(Stopwatch.currentState === StopwatchState.work){
            this.stopwatchStartButton.value = "리셋";
            Stopwatch.currentState = StopwatchState.stop;
            Stopwatch.start();
            return;
        }
            
        if(Stopwatch.currentState === StopwatchState.stop){
            this.stopwatchStartButton.value = "시작";
            Stopwatch.currentState = StopwatchState.work;
            Stopwatch.start();
        }
    },
    displayClock : function() {
      Stopwatch.stop();
      Clock.start();  
      
      this.currentFunction = Functions.clock;
    },
    displayStopwatch : function() {
      Clock.stop()
      Stopwatch.start();
      this.toggleStopwatchButton();
      
      this.currentFunction = Functions.stopwatch;
    },
    toggleFunction : function() {
        if(this.currentFunction === Functions.clock){
            this.toggleFunctionButton.innerHTML = "시계";
            this.displayStopwatch();
            return;
        }
        
        if(this.currentFunction === Functions.stopwatch){
            this.toggleFunctionButton.innerHTML = "스탑워치";
            this.displayClock();
        }
    },
    stopStopwatch :function() {
        if(this.currentFunction !== Functions.stopwatch)
            return;
         
        Stopwatch.stop();
    },
};