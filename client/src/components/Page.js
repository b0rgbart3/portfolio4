import React, {useEffect, useState} from "react";
import "./Page.scss";


function Page(props) {


    const [pageClass, setPageClass] = useState("page");
    useEffect(() => {
        let pageTimer = setTimeout(() => {
            setPageClass("page page2");
            // console.log('setting new style');
        }, 50);
        return () => {clearTimeout(pageTimer); }
    });


    return(    
        <div className="verticalExtender">
            <div className={pageClass + " group"}>
              { props.content }
            </div>
        </div>
    )
}

export default Page;
