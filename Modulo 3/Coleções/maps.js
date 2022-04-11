function getAdmins(map){
    let admins = []
    for([key, val] of map){
        if(val === "adm"){
            admins.push(key)
        }
    }
    return admins
}

const userRoles = new Map()

userRoles.set("Ronaldo" , 'user')
userRoles.set("Sido" , 'adm')
userRoles.set("Marcelo" , 'user')
userRoles.set("Cristinao" , 'inter')
userRoles.set("Joaquina" , 'adm')

console.log(getAdmins(userRoles))