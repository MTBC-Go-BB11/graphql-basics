const { ApolloServer, gql } = require('apollo-server');




const typeDefs=gql`
type User{
    name:String
    designation:String
    department:String
}

type Query{
    users:[User]
    user(name:String!):User
}
`

const users = [
    {
      name: 'John Doe',
      designation: 'Software Engineer',
      department:'IT'
    },
    {
        name: 'John Dae',
        designation: 'Associate Software Engineer',
        department:'IT'
    },
  ];



const resolvers={
    Query:{
        users:()=>(
             users
        ),
        user(parent, args, context, info){
            return users.find(usr=> usr.name==args.name);
        }
    }
}


const server=new ApolloServer({typeDefs,resolvers});

server.listen().then(({url})=>{
    console.log("😜    Server Listening on ",url);
})


