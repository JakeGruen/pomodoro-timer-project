import React from "react";

//Increases and Decreases Focus Time
function Focus({focusDuration, setFocusDuration, disableButton}){
 

    function helper(num){
      if(num < 10){
        return  '0'
      }
      return ''
    }

      function handleIncreaseFocus(){
       if(focusDuration >= 60) return
        const newValue = focusDuration+ 5
       setFocusDuration(newValue)
     }
    // ^ increases focus in increments of 5
      function handleDecreaseFocus(){
        if(focusDuration <= 5) return 
        const newValue = focusDuration - 5
        setFocusDuration(newValue)
      }
 // ^ decreases focus in increments of 5
      return (
        <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          {`Focus Duration: ${helper(focusDuration)}${focusDuration}:00`}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={handleDecreaseFocus}
            disabled={disableButton}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={handleIncreaseFocus}
            disabled={disableButton}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
      );
}
// ^ returns focus increase/decrease buttons 
export default Focus;
