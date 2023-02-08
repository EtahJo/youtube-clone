import {BsPersonSquare} from 'react-icons/bs'
import {SiYoutubestudio} from 'react-icons/si';
import {MdOutlineSwitchAccount} from 'react-icons/md';
import {RiLogoutBoxLine} from 'react-icons/ri'

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
    more:[
        {
            email:'arrahetah23@gmail.com',
            name:'Arrah Etah',
            subs:'21 Subscribers',
            img:'https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo'
        },
        {
            email:'musiclova2356@gmail.com',
            name:'Miss Etah',
            subs:'15,800 Subscribers',
            img:'https://yt3.ggpht.com/yti/AHXOFjWn92_pZg1i95i8ZmjkUdNg8uU2rP96v6LRyRq4TA=s108-c-k-c0x00ffffff-no-rj'
        },

    ]
},
{ 
    icon: RiLogoutBoxLine,
    name:'Sign Out'
},
]

export default userModal