import sign from "aws-sig";
import targets from "./x-amz-targets.js";

function put(region, data, credentials) {
    const url = `https://kinesis.${region}.amazonaws.com`;
    const parsed = new URL(url);

    const signed = sign({
        method  : "POST",
        service : "kinesis",
        region,
        
        url,

        headers : {
            Host           : parsed.host,
            "Content-Type" : "application/x-amz-json-1.1",

            "X-Amz-Target" : targets.PutRecord
        },

        body : btoa(JSON.stringify(data)),
    }, credentials);


    return signed;
}

export default put;
