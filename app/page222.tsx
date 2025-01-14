import { client } from "@/sanity/lib/client"

import React from "react"

const Page = async () = > {

    const response = await CLient.fetch (`*[_type == "product"]`)

    console.log("sanity response>>",response)
    return(
        <div>Page</div>
    )
}

export default Page