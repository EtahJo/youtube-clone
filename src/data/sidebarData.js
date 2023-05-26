import {
  AiFillHome,
  AiOutlineHistory,
  AiOutlineLike,
  AiOutlineDown,
  AiOutlineSetting,
} from 'react-icons/ai';
import { BiVideo, BiHelpCircle } from 'react-icons/bi';
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdOutlineHouse,
  MdOutlineFeedback,
} from 'react-icons/md';
import { RiVideoLine, RiFlagLine } from 'react-icons/ri';
import { FaGripfire, FaRegLightbulb } from 'react-icons/fa';
import { SiYoutubegaming } from 'react-icons/si';
import { BsNewspaper } from 'react-icons/bs';
import { GiTrophyCup } from 'react-icons/gi';
import { TfiMusic } from 'react-icons/tfi';
import { FiRadio } from 'react-icons/fi';

const sidebarData = [
  {
    name: 'Home',
    Icon: AiFillHome,
  },
  {
    name: 'Shorts',
    Icon: RiVideoLine,
  },
  {
    name: 'Subscriptions',
    Icon: MdOutlineSubscriptions,
  },
  {
    line: true,
  },
  {
    name: 'Library',
    Icon: MdOutlineVideoLibrary,
  },
  {
    name: 'History',
    Icon: AiOutlineHistory,
  },
  {
    name: 'Your Videos',
    Icon: BiVideo,
  },
  {
    name: 'Watch Later',
    Icon: MdOutlineWatchLater,
  },
  {
    name: 'Liked Videos',
    Icon: AiOutlineLike,
  },
  {
    name: 'Show More',
    Icon: AiOutlineDown,
  },
  {
    line: true,
  },
  {
    title: 'Subsciptions',
  },
  {
    name: 'Free Lancer',
    img: 'https://cdn5.f-cdn.com/contestentries/1595955/21585745/5d78a9bbb0993_thumb900.jpg',
  },
  {
    name: 'Internet HelpLine',
    img: 'https://internethelpline.in/wp-content/uploads/2021/03/47.jpg',
  },
  {
    name: 'This Girl',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg/440px-Young_girl_smiling_in_sunshine_%282%29.jpg',
  },
  {
    name: 'Beautiful Girl',
    img: 'https://guardian.ng/wp-content/uploads/2022/03/Confident-girls.jpg',
  },
  {
    name: 'E Girl',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/E-girl.png',
  },
  {
    name: ' Girl Leadership',
    img: 'https://girlsleadership.org/wp-content/uploads/2020/07/girl-glasses-7-965x1024-1.jpg',
  },
  {
    name: 'Fille Francais',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEzNzYzNn0?utm_source=dictionnaire&utm_medium=referral',
  },
  {
    name: 'Show 20 More',
    Icon: AiOutlineDown,
  },
  {
    line: true,
  },
  {
    title: 'Explore',
  },
  {
    name: 'Trending',
    Icon: FaGripfire,
  },
  {
    name: 'Music',
    Icon: TfiMusic,
  },
  {
    name: 'Live',
    Icon: FiRadio,
  },
  {
    name: 'Gaming',
    Icon: SiYoutubegaming,
  },
  {
    name: 'News',
    Icon: BsNewspaper,
  },
  {
    name: 'Sports',
    Icon: GiTrophyCup,
  },
  {
    name: 'Learning',
    Icon: FaRegLightbulb,
  },
  {
    name: 'Fashion & Beauty',
    Icon: MdOutlineHouse,
  },
  {
    line: true,
  },
  {
    title: 'More from YouTube',
  },
  {
    name: 'Creator Studio',
    img: 'https://cdn.pixabay.com/photo/2021/05/22/10/22/youtube-6273167_960_720.png',
  },
  {
    name: 'YouTube Music',
    img: 'https://images.hindustantimes.com/tech/img/2021/10/21/1600x900/YouTube_Music_1634802693083_1634802709145.jpg',
  },
  {
    name: 'YouTube Kids',
    img: 'https://downloadr2.apkmirror.com/wp-content/uploads/2019/03/5c9bbcdbba3a9.png',
  },
  {
    name: 'YouTube TV',
    img: 'https://m.media-amazon.com/images/I/31rcquarKXL.png',
  },
  {
    line: true,
  },
  {
    name: 'Settings',
    Icon: AiOutlineSetting,
  },
  {
    name: 'Report History',
    Icon: RiFlagLine,
  },
  {
    name: 'Help',
    Icon: BiHelpCircle,
  },
  {
    name: 'Send Feedback',
    Icon: MdOutlineFeedback,
  },
  {
    line: true,
  },
  {
    footer: 'About',
  },
  {
    footer: 'Press',
  },
  {
    footer: 'Copyright',
  },
  {
    footer: 'Contact us',
  },
  {
    footer: 'Creators',
  },
  {
    footer: 'Advertise',
  },
  {
    footer: 'Developers',
  },
  {
    footer2: 'TermsHow ',
  },
  {
    footer2: 'Privacy',
  },
  {
    footer2: 'Policy & Safety',
  },
  {
    footer2: 'YouTube works',
  },
  {
    footer2: 'Test new features',
  },
  {
    right: '© 2022 Google LLC',
  },
];

export default sidebarData;
