class UserController{
    
    constructor(){
        this.users = [];
    }
    
    getUsers(){
        return this.users;
    }

    add(user){
        this.users.push(user);
    }
// js se comparar la referencia en memoria obj creado ahorita contra el obj que le  push , 
    remove(user){
        this.users = this.users.filter(function(ele){
            console.log(ele, user, ele != user)
            return ele != user; 
        });
    }

    findByEmail(email){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].email === email)
                return this.users[i];
        } 
    }

    findById(id){
        for (let i = 0; i < this.users.length; i++) { 
            if(this.users[i].id === id)
                return this.users[i];
        } 
    }


}


module.exports = UserController;