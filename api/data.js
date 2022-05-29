import axios from "axios";

export const getMune =(param)=>{

    return axios.request({
        url:'/pemission/getMune',
        method:'post',
        data:param
        
    })
}

export const getData =()=>{
    return axios.request({
        url:'/home/getData',
        method:'get',
        
        
    })
}

export const getUser =(params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
        
    })
}