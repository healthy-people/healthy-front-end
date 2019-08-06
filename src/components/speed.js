import React from 'react';

function SpeedDistance() {
    return <div>
        <h3>What distance would you like to set for the speed challenge?</h3>
        <form action="#">
            <p>
                <div className='input-field col s3'>
                    <input placeholder="#" id="customNumber" type='number' />
                    <label for="customNumber"></label>
                    <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="miles">Mile(s)</option>
                        <option value="kilometers">Kilometers(s)</option>
                    </select>
                </div>
            </p>
        </form>
    </div>
}

function Speed() {
    return <div>
    <h1>Challenge created! Whoever logs the fastest time at *chosen distance* over the next *length chosen* wins!!</h1>
    </div>
}


export default SpeedDistance;
export default Speed;
