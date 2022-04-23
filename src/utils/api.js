import {config} from './config'

const onResponce = (res) => {
   return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`)
}

class Api {
    constructor({url, token}) {
        this._url = url;
        this._token = token;
    }

getPosts() {
       return fetch(`${this._url}/posts`, {
       headers: {
           authorization: `Bearer ${this._token}`
       }
       }) 
       .then(onResponce)
    }

    getCurrentUser(){
        return fetch (`${this._url}/users/me`,{
        headers: {
            authorization: `Bearer ${this._token}`
        }
        }).then(onResponce)
    }
    
    showLike(itemID) {
return fetch(`${this._url}/posts/likes/${itemID}`,{
    method: 'PUT',
    headers: {
        authorization: `Bearer ${this._token}`}
}).then(onResponce)
    }
    deleteLike(itemID) {
        return fetch(`${this._url}/posts/likes/${itemID}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${this._token}`,
            }
        }).then(onResponce)
            }
    
    deletePost(postID) {
        return fetch(`${this._url}/posts/${postID}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${this._token}`,
            }
        }).then(onResponce)
    }
//     search(searchQuery) {
// return fetch(`${this._url}/products/search?query=${searchQuery}`, {
//     headers: {
//         authorization: `Bearer ${this._token}`,
//     },
// }).then(onResponce)

//     }

//     addLike(itemID) {
// return fetch(`${this._url}/products/likes/${itemID}`, {
//     method: 'PUT',
//     headers: {
//         authorization: `Bearer ${this._token}`,
//     }
// }).then(onResponce)
//     }
    
//     deleteLike(itemID) {
//         return fetch(`${this._url}/products/likes/${itemID}`, {
//             method: 'DELETE',
//             headers: {
//                 authorization: `Bearer ${this._token}`,
//             }
//         }).then(onResponce)
//             }

//     getCurrentUser() {
//         return fetch(`${this._url}/users/me`, {
//             headers: {
//                 authorization: `Bearer ${this._token}`,
//             }
//         }).then(onResponce)
//     }

   
}

export default new Api(config)
