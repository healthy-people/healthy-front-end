import React from 'react';

function challengeChoice() {
    return (
        <div>
            <div>
                <h1>Select what challenge you want to create:</h1>
                <form action="#">
                    <p>
                        <label>
                            <input name="runSpeed" type="radio" disabled="disabled" />
                            <span>Running (speed)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="runDistance" type="radio" disabled="disabled" />
                            <span>Running (distance)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="bikeSpeed" type="radio" disabled="disabled" />
                            <span>Biking (speed)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="bikeDistance" type="radio" disabled="disabled" />
                            <span>Biking (distance)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="water" type="radio" disabled="disabled" />
                            <span>Water</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="noBooze" type="radio" disabled="disabled" />
                            <span>Abstaining (alcohol)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="noCigs" type="radio" disabled="disabled" />
                            <span>Abstaining (cigarettes)</span>
                        </label>
                    </p>
                </form>
            </div>
            <div>
                <h1>How long do you want this challenge to last?</h1>
                <form action="#">
                    <p>
                        <label>
                            <input name="1day" type="radio" />
                            <span>1 day</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="1week" type="radio" />
                            <span>1 week</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="1month" type="radio" />
                            <span>1 month</span>
                        </label>
                    </p>
                    {/* custom length */}
                    <p>
                        <div className='input-field col s3'>
                            <input placeholder="#" id="customNumber" type='number' />
                            <label for="customNumber">Custom length</label>
                        </div>
                        <div>
                            <select>
                                <option value="" disabled selected>Choose your option</option>
                                <option value="day">Day(s)</option>
                                <option value="week">Weeks(s)</option>
                                <option value="month">Months(s)</option>
                            </select>
                        </div>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default challengeChoice;