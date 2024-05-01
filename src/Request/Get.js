import axios from "axios";

const Get=async(url)=>{

    let sendResponse;

    await axios.get(url).then(
        (response)=>{
            // console.log("response ",response.data);
            sendResponse=response.data;
        },
        (error)=>{
            console.log("error ",error);
            sendResponse={"response":"3"};
        }
    )
        return sendResponse;
}

export default Get;