import axios from "axios";

export default {

    getUsersChallenges: (user_id) => axios.get("/api/group_challenge/"+user_id).then(response => {
        console.log(JSON.parse(JSON.stringify(response.data)));
    }).catch(error => {
        console.log(error)
    }),
    createNewChallenge: (data) => axios.post("/api/group_challenge/create", data),
    addChallengeMember : (data) => axios.post("/api/challenge_member/create", data),
    deleteChallengeMember: (data) => axios.delete("/api/challenge_member/delete", data),
    addRunningDistLog: (data) => axios.post("/api/running_distance_logs/create", data),
    getRunningDistLogs: (group_challenge_id) => axios.get("/api/running_distance_logs/"+group_challenge_id),
    addRunningPaceLog: (data) => axios.post("/api/running_pace_logs/create", data),
    getRunningPaceLogs: (group_challenge_id) => axios.get("/api/running_pace_logs/"+group_challenge_id),
    addBikingDistLog: (data) => axios.post("/api/biking_distance_logs/create", data),
    getBikingPaceLog: (group_challenge_id) => axios.get("/api/biking_pace_logs/"+group_challenge_id),
    getMessages: (group_challenge_id) => axios.get("/api/messages/"+group_challenge_id),
    sendMessage: (data) => axios.post("/api/messages/create", data)

}