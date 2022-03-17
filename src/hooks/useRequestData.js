// import axios from "axios";
// import { useState, useEffect } from "react";

// const useRequestData = (url, innitialData) => {
//     const [data, setData] = useState(innitialData)

//     useEffect(() => {
//         axios
//             .get(url)
//             .then((response) => {console.log(response.data)
//                 setData(response.data.results)
//             })
//             .catch((error) => {console.log(error.reponse)})
//     }, [url])

//     return data
// }

// export default useRequestData