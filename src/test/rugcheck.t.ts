import axios from "axios"
import { config } from "../packages/config/constants";

const testRugCheck = async (tokenAddress: string) => {
    try {
        const { data } = await axios({
            method: 'post',
            url: config.RUG_CHECKER_URL,
            data: {
                tokenAddress: tokenAddress
            }
        });

        console.log("Token rug status ", data)
    } catch (error) {
        console.log("Error testing rug check ", error)
    }
}

testRugCheck("0x6A6AA13393B7d1100c00a57c76c39e8B6C835041")
