import {BsPersonSquare} from 'react-icons/bs'
import {SiYoutubestudio} from 'react-icons/si';
import {MdOutlineSwitchAccount} from 'react-icons/md';
import {RiLogoutBoxLine} from 'react-icons/ri';
import {AiOutlineDollar} from 'react-icons/ai';

const userModal = [
    {line:true},

{ 
    icon: BsPersonSquare,
    name:'Your Channel'
},
{ 
    icon: SiYoutubestudio,
    name:'YouTube Studio'
},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Switch Account',
    account:true,
    more:[
        {
            email:'arrahetah23@gmail.com',
            name:'Arrah Etah',
            subs:'21 Subscribers',
            img:'https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo',
            account:true
        },
        {
            email:'musiclova2356@gmail.com',
            name:'Miss Etah',
            subs:'15,800 Subscribers',
            img:'https://yt3.ggpht.com/yti/AHXOFjWn92_pZg1i95i8ZmjkUdNg8uU2rP96v6LRyRq4TA=s108-c-k-c0x00ffffff-no-rj',
            account:true
        },

    ]
},
{ 
    icon: RiLogoutBoxLine,
    name:'Sign Out'
},
{line:true},
{ 
    icon: AiOutlineDollar,
    name:'Purchases and memberships'
},
{ 
    icon: RiLogoutBoxLine,
    name:'Your data in Youtube'
},
{line:true},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Appearance:',
    appearance:true,
    more:[
        {
            theme:'Dark theme',
            appearance:true
        },
        {
            theme:'Light theme',
            appearance:true
        },

    ]
},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Language:',
    language:true,
    more:[
        {
            lang:'English',
            language:true
        },
        {
            lang:'French',
            language:true
        },

    ]
},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Restricted Mode:',
    mode:true,
    more:[
        {
            msg:'Activated Restricted Mode',
            mode:true
        },

    ]
},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Location:',
    location:true,
    more:[
        {
            lang:'English',
            location:true
        },
        {
            lang:'French',
            location:true
        },

    ]
},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Keyboard shortcuts',
   
},
{line:true},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Settings',
   
},
{line:true},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Help',
   
},
{ 
    icon: MdOutlineSwitchAccount,
    name:'Send Feedback',
   
},
]

export default userModal