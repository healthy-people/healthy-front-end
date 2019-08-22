import React, { useState, useEffect } from 'react';

//this creates format.style for each challenge
function Challenge(props){
    return (
        <span>{props.challenge_name}</span>
      );
}

export default Challenge;