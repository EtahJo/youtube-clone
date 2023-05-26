import { BsPersonSquare, BsPersonCircle, BsMoon, BsKeyboardFill } from 'react-icons/bs';
import { SiYoutubestudio } from 'react-icons/si';
import {
  MdOutlineSwitchAccount,
  MdOutlineAddModerator,
  MdOutlineLanguage,
  MdOutlineFeedback,
} from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiOutlineDollar, AiOutlineSetting } from 'react-icons/ai';
import { TbLanguage } from 'react-icons/tb';
import { BiHelpCircle } from 'react-icons/bi';

const userModal = [
  { line: true },

  {
    icon: BsPersonSquare,
    name: 'Your Channel',
  },
  {
    icon: SiYoutubestudio,
    name: 'YouTube Studio',
  },
  {
    icon: MdOutlineSwitchAccount,
    name: 'Switch Account',
    account: true,
    more: [
      {
        email: 'arrahetah23@gmail.com',
        name: 'Arrah Etah',
        subs: '21 Subscribers',
        img: 'https://lh3.googleusercontent.com/ogw/AOh-ky3XFUqj4N-jxZTxj_HXmL6_rpAzPTtQJnGOUUkUxQ=s64-c-mo',
      },
      {
        email: 'musiclova2356@gmail.com',
        name: 'Miss Etah',
        subs: '15,800 Subscribers',
        img: 'https://yt3.ggpht.com/yti/AHXOFjWn92_pZg1i95i8ZmjkUdNg8uU2rP96v6LRyRq4TA=s108-c-k-c0x00ffffff-no-rj',
      },
    ],
  },
  {
    icon: RiLogoutBoxLine,
    name: 'Sign Out',
  },
  { line: true },
  {
    icon: AiOutlineDollar,
    name: 'Purchases and memberships',
  },
  {
    icon: BsPersonCircle,
    name: 'Your data in Youtube',
  },
  { line: true },
  {
    icon: BsMoon,
    name: 'Appearance:',
    appearance: true,
    more: [
      {
        theme: 'Dark theme',
      },
      {
        theme: 'Light theme',
      },
    ],
  },
  {
    icon: TbLanguage,
    name: 'Language:',
    language: true,
    more: [
      {
        lang: 'English',
      },
      {
        lang: 'French',
      },
    ],
  },
  {
    icon: MdOutlineAddModerator,
    name: 'Restricted Mode:',
    mode: true,
    more: [
      {
        msg: 'Activated Restricted Mode',
      },
    ],
  },
  {
    icon: MdOutlineLanguage,
    name: 'Location:',
    location: true,
    more: [
      {
        lang: 'English',
      },
      {
        lang: 'French',
      },
    ],
  },
  {
    icon: BsKeyboardFill,
    name: 'Keyboard shortcuts',
  },
  { line: true },
  {
    icon: AiOutlineSetting,
    name: 'Settings',
  },
  { line: true },
  {
    icon: BiHelpCircle,
    name: 'Help',
  },
  {
    icon: MdOutlineFeedback,
    name: 'Send Feedback',
  },
];

export default userModal;
