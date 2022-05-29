import  Mock  from 'mockjs';
import homeApi from './mockserveData/home';
import userApi from './mockserveData/user';

Mock.mock('/home/getData',homeApi.getStatisticalData)

Mock.mock(/user\/add/, 'post', userApi.createUser)
Mock.mock(/user\/dit/, 'post', userApi.updateUser)

Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/user\/del/, 'get', userApi.deleteUser)

