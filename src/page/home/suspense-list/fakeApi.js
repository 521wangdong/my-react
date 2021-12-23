import moment from 'moment'

export function fetchProfileData() {
    let userPromise = fetchUser();
    let postsPromise = fetchPosts();
    return {
        user: wrapPromise(userPromise),
        posts: wrapPromise(postsPromise)
    };
}


function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}

function fetchUser() {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            
            resolve({
                time: moment().format('YYYY:MM:DD hh:mm:ss')
            });
        }, 1000);
    });
}



// function fetchPosts() {
//     let ringoPostsAtTheTime = ringoPosts;
//     
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("===== fetched posts =====");
//             resolve(ringoPostsAtTheTime);
//         }, 5000);
//     });
// }


const fetchPosts = async () => {
    const info = await fetch(`https://mini.aphoto.cn/wx/home/pcGetHome?t=1640018214062`)
    .then(response => response.json())
    .then(res => {return res})

    

    // let ringoPostsAtTheTime = ringoPosts;
    
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("===== fetched posts =====");
            // resolve(ringoPostsAtTheTime);
            resolve(info);
        }, 5000);
    });

}
