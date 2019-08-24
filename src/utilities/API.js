import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL || '/'

export default {

    getUsersChallenges: (user_id) => axios.get(baseUrl+ "/api/group_challenge/"+user_id),
    // .then(response => {
    //     return (JSON.parse(JSON.stringify(response.data)));
    // }).catch(error => {
    //     return (error)
    // }),
    createNewChallenge: (data) => axios.post(baseUrl+ "/api/group_challenge/create", data),
    addChallengeMember : (data) => axios.post(baseUrl+ "/api/challenge_member/create", data),
    deleteChallengeMember: (data) => axios.delete(baseUrl+ "/api/challenge_member/delete", data),
    addRunningDistLog: (data) => axios.post(baseUrl+ "/api/running_distance_logs/create", data),
    getUserRunningDistLogs: (user_id, group_challenge_id) => axios.get(baseUrl+ "/api/running_distance_logs/user/"+user_id+"/"+group_challenge_id),
    getRunningDistLogs: (group_challenge_id) => axios.get(baseUrl+ "/api/running_distance_logs/"+group_challenge_id),
    addRunningPaceLog: (data) => axios.post(baseUrl+ "/api/running_pace_logs/create", data),
    getRunningPaceLogs: (group_challenge_id) => axios.get(baseUrl+ "/api/running_pace_logs/"+group_challenge_id),
    addBikingDistLog: (data) => axios.post(baseUrl+ "/api/biking_distance_logs/create", data),
    getBikingDistLogs: (group_challenge_id) => axios.post(baseUrl+ "/api/biking_distance_logs/"+group_challenge_id),
    getBikingPaceLogs: (group_challenge_id) => axios.get(baseUrl+ "/api/biking_pace_logs/"+group_challenge_id),
    addBikingPaceLog: (data) => axios.post(baseUrl+ "/api/biking_pace_logs/create", data),
    getMessages: (group_challenge_id) => axios.get(baseUrl+ "/api/messages/"+group_challenge_id),
    sendMessage: (data) => axios.post(baseUrl+ "/api/messages/create", data)

}