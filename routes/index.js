import user from './user.js'
import contact from './contact.js';

export default function(app){
    app.use('/api/user',user)
    app.use('/api/contact',contact)
    
}