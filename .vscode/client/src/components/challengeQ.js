import React from 'react';

function challengeChoice() {
    return (
        <div>
            <div>
                <h1>Select what challenge you want to create:</h1>
                <form action="#">
                    <p>
                        <label>
                            <input name="runSpeed" type="radio" />
                            <span>Running (speed)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="runDistance" type="radio"/>
                            <span>Running (distance)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="bikeSpeed" type="radio"/>
                            <span>Biking (speed)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="bikeDistance" type="radio" />
                            <span>Biking (distance)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="water" type="radio"/>
                            <span>Water</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="noBooze" type="radio"/>
                            <span>Abstaining (alcohol)</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input name="noCigs" type="radio" />
                            <span>Abstaining (cigarettes)</span>
                        </label>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default challengeChoice;

