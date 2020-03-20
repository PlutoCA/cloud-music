/*
 * @Date: 2020-03-20 10:46:58
 * @LastEditors: Pluto
 * @LastEditTime: 2020-03-20 11:32:41
 */

export function login(data : any) {
    return {
        option: {
            method: "GET",
            url: "/login/cellphone",
            data,
        }
    };
}

export function userInfo(data: {
    uid: string
}) {
    return {
        option: {
            method: "GET",
            url: "/user/detail",
            data
        }
    };
}

export function dailySign(data: {
    type: string
}) {
    return {
        option: {
            method: "GET",
            url: "/daily_signin",
            data
        }
    };
}
