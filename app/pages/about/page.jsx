import ImageView from "@/app/views/imageView";
import React from "react";
import HomePage from "../homePage";

const page=()=>{
    let data = [];

    try {
        const file = fs.readFileSync(process.cwd() + '/public/data.json', 'utf8');
        data = JSON.parse(file);
    } catch (error) {
        console.error(error);
    }

    return(
        <div>
            <HomePage/>
        
        </div>
    )
}

export default page