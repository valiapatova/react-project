const Path = {

    Home: '/',
    Login: '/login',
    Register: '/register',
    Logout: '/logout',
    Posts: '/posts',
    PostDetails: '/posts/:postId',
    PostCreate: '/posts/create',
    PostEdit: '/posts/:postId/edit',    
    // PostDelete: '/posts/:postId/delete',
    //CommentEdit: '/comments/:commentId/edit',
    CommentEdit: '/comments/:commentId/:postId',
    
    CommentDelete: '/comments/:commentId/delete',
    WhyUs:'/whyus',
    WhyUsDetails:'/whyus/:id',
    TopServices:'/services',
    About:'/about',
    NotFound: '*',
    Error: '/error',

};

export default Path;

