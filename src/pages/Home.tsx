import logo from "../assets/logo.png";
import background from "../assets/images/background.png"
import robot from "../assets/images/robot.png"
import rectangle from "../assets/images/rectangle.png"
import serviceBg from "../assets/images/service-bg.png"
import coinPlant from "../assets/images/coin-plant.png"
import ongoingProtection from "../assets/images/ongoing-protection.png"
import hacker from "../assets/images/hacker.png"
import fbi from "../assets/images/fbi-icon.png"
import interpol from "../assets/images/interpol-icon.png"
import crowdstrise from "../assets/images/crowdstrise-icon.png"
import notepen from "../assets/images/note-pen.png"
import notekey from "../assets/images/note-key.png"
import cloudgift from "../assets/images/cloud-gift.png"
import computer1 from "../assets/images/computer1.png"
import computer2 from "../assets/images/computer2.png"
import computer3 from "../assets/images/computer3.png"
import protectbg from "../assets/images/protect-bg.png"
import { useState } from "react";

const featureData = [
    {
        title: "Effective Rewards",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        icon: <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.666626" width="100" height="100" rx="50" fill="#50A8EB" />
            <path d="M68.2987 73.6376L62.2578 56.5335C65.9816 53.3486 68.3518 48.6265 68.3518 43.3532C68.3518 33.7844 60.5674 26 50.9985 26C41.4297 26 33.6453 33.7844 33.6453 43.3532C33.6453 48.6245 36.0176 53.3466 39.7394 56.5335L33.7025 73.6376C33.5636 74.0276 33.678 74.4665 33.9903 74.7421C34.1822 74.9095 34.4232 74.9973 34.666 74.9973C34.8212 74.9973 34.9784 74.9606 35.1234 74.8891L42.7057 71.0979L47.2992 74.7747C47.5748 74.9952 47.9423 75.0545 48.2772 74.9401C48.6099 74.8217 48.859 74.544 48.9345 74.199L50.3452 67.8497L53.1238 74.3766C53.2483 74.6726 53.5035 74.8891 53.8139 74.9666C54.1201 75.0503 54.4528 74.9727 54.7019 74.7747L59.2954 71.0979L66.8778 74.8891C67.0228 74.9606 67.1779 74.9973 67.3351 74.9973C67.5781 74.9973 67.819 74.9096 68.0108 74.7421C68.3232 74.4665 68.4354 74.0276 68.2987 73.6376ZM55.9534 57.8258L52.791 58.5505C52.2011 58.6199 51.6049 58.6648 50.9985 58.6648C42.5546 58.6648 35.6869 51.7971 35.6869 43.3532C35.6869 34.9093 42.5546 28.0415 50.9985 28.0415C59.4424 28.0415 66.3102 34.9093 66.3102 43.3532C66.3102 50.0618 61.9699 55.7618 55.9534 57.8258Z" fill="white" />
            <path d="M50.9985 32.1246C44.8064 32.1246 39.77 37.1632 39.77 43.3532C39.77 49.5431 44.8064 54.5817 50.9985 54.5817C57.1905 54.5817 62.227 49.5431 62.227 43.3532C62.227 37.1632 57.1905 32.1246 50.9985 32.1246ZM57.8418 39.9907L49.6756 48.1569C49.4755 48.357 49.2143 48.455 48.9529 48.455C48.6916 48.455 48.4303 48.355 48.2302 48.1569L44.1471 44.0738C43.7531 43.6757 43.7531 43.0306 44.1512 42.6303C44.5493 42.2322 45.1965 42.2322 45.5946 42.6303L48.955 45.9908L56.3985 38.5473C56.7966 38.1492 57.4438 38.1492 57.8419 38.5473C58.2399 38.9455 58.2399 39.5926 57.8418 39.9907Z" fill="white" />
        </svg>,
    },
    {
        title: "Collaborative Approach",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="50" fill="#50A8EB" />
            <g clipPath="url(#clip0_957_713)">
                <path d="M68.2822 50.1635V40.718H51.9489V34.6154H58.4104V26H42.2566V34.6154H48.7181V40.718H32.3847V50.0512H25.8335V58.6666H42.1669V50.0512H35.6155V43.9488H48.7181V66.3846H42.1669V75H58.5001V66.3846H51.9489V43.9488H65.0515V50.1635H58.5001V58.7788H74.8335V50.1635H68.2822Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_957_713">
                    <rect width="49" height="49" fill="white" transform="translate(25.8335 26)" />
                </clipPath>
            </defs>
        </svg>,
    },
    {
        title: "Comprehensive Cybersecurity Strategy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="50" fill="#50A8EB" />
            <g clipPath="url(#clip0_957_713)">
                <path d="M68.2822 50.1635V40.718H51.9489V34.6154H58.4104V26H42.2566V34.6154H48.7181V40.718H32.3847V50.0512H25.8335V58.6666H42.1669V50.0512H35.6155V43.9488H48.7181V66.3846H42.1669V75H58.5001V66.3846H51.9489V43.9488H65.0515V50.1635H58.5001V58.7788H74.8335V50.1635H68.2822Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_957_713">
                    <rect width="49" height="49" fill="white" transform="translate(25.8335 26)" />
                </clipPath>
            </defs>
        </svg>,
    },
    {
        title: "Client Confidentiality and Discretion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        icon: <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.666626" y="0.5" width="100" height="100" rx="50" fill="#50A8EB" />
            <path d="M46.8744 57.3831C49.7546 55.7484 52.4791 54.97 55.515 54.97C56.3713 54.97 57.2275 55.0478 58.0059 55.1256C58.3952 55.2035 58.473 55.0478 58.0838 54.8143C56.6048 53.958 54.9701 53.1796 53.2575 52.479C49.9103 51.0778 49.4432 49.8323 49.4432 48.4312C49.4432 47.03 50.3774 45.7845 51.4672 44.7725C53.4132 42.9822 54.503 40.569 54.503 37.6889C54.503 32.3177 51.1558 27.725 45.2397 27.725C39.3237 27.725 35.9764 32.3177 35.9764 37.6889C35.9764 40.569 37.0662 43.06 39.0123 44.7725C40.1021 45.7845 41.0362 47.1078 41.0362 48.4312C41.0362 49.7545 40.4913 51.0778 37.2219 52.479C32.3957 54.5029 27.8029 56.8382 27.7251 61.1974C27.7251 64.0776 29.9047 66.6464 32.6292 66.6464H43.6829C44.5391 66.6464 45.2397 65.9458 45.2397 65.0895V60.0297C45.3176 58.9399 45.8625 57.928 46.8744 57.3831Z" fill="white" />
            <path d="M72.1734 61.9758C64.8562 64.2333 59.0958 57.3053 51.078 60.5747C50.4553 60.8082 50.1439 61.3531 50.1439 62.0537V70.3829C50.1439 71.4727 51.078 72.1732 52.09 71.8619C60.03 69.4488 65.7903 76.3768 73.2632 73.263C73.8081 73.0295 74.2752 72.4846 74.2752 71.784V63.4549C74.2752 62.4429 73.1854 61.6645 72.1734 61.9758ZM62.4431 69.7601C60.7305 69.7601 59.3294 68.3589 59.3294 66.6464C59.3294 64.9339 60.7305 63.5327 62.4431 63.5327C64.1556 63.5327 65.5568 64.9339 65.5568 66.6464C65.5568 68.3589 64.1556 69.7601 62.4431 69.7601Z" fill="white" />
        </svg>,
    },
    {
        title: "Expanding Reach for Broader Protection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        icon: <svg width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="100" height="100" rx="50" fill="#50A8EB" />
            <path d="M68.3579 36.9863C68.2875 36.4808 67.9238 36.0651 67.4322 35.9284L51.6767 31.5468C51.4523 31.4843 51.2149 31.4843 50.9902 31.5468L35.2347 35.9284C34.743 36.0651 34.3793 36.4807 34.3091 36.9863C34.2177 37.6434 32.133 53.1695 37.4802 60.893C42.8211 68.6076 50.7 70.5846 51.0328 70.6648C51.1317 70.6888 51.2325 70.7005 51.3336 70.7005C51.4347 70.7005 51.5355 70.6886 51.6344 70.6648C51.9673 70.5844 59.8462 68.6074 65.1869 60.893C70.534 53.1695 68.4492 37.6434 68.3579 36.9863ZM62.8858 59.2939C58.2534 65.9852 51.3144 67.6612 51.3144 67.6612V51.1003H37.0141C36.1838 44.8849 37.0711 38.5005 37.0711 38.5005L51.3143 34.5394L51.3144 51.1003H65.6146C65.211 54.1224 64.4014 57.1048 62.8858 59.2939Z" fill="white" />
        </svg>,
    },
    {
        title: "Long-Term Security Enhancements",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        icon: <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.333435" y="0.5" width="100" height="100" rx="50" fill="#50A8EB" />
            <g clipPath="url(#clip0_957_678)">
                <path d="M75.159 28.5677C75.1564 28.5325 75.1541 28.4973 75.1499 28.4625C75.1456 28.427 75.1397 28.3918 75.1337 28.3567C75.1275 28.3192 75.1214 28.2818 75.1132 28.245C75.1059 28.2123 75.0969 28.1803 75.0881 28.1479C75.0782 28.1103 75.0682 28.0726 75.0562 28.0359C75.0458 28.0036 75.0332 27.9718 75.0212 27.9399C75.0078 27.9048 74.995 27.8696 74.98 27.8355C74.9655 27.8021 74.9488 27.7695 74.9325 27.7367C74.9169 27.7054 74.9018 27.6738 74.8849 27.6433C74.8664 27.6102 74.8458 27.5783 74.8258 27.5459C74.8075 27.5168 74.7897 27.4876 74.7699 27.4594C74.749 27.4291 74.7261 27.4 74.7036 27.3706C74.6813 27.3415 74.6589 27.3125 74.6352 27.2847C74.6131 27.2586 74.5892 27.2335 74.5658 27.2083C74.5381 27.1789 74.5105 27.1499 74.4814 27.1219C74.4716 27.1125 74.4632 27.1021 74.4532 27.0929C74.4385 27.0794 74.4228 27.0681 74.4079 27.0552C74.3775 27.0283 74.3466 27.0023 74.3147 26.9771C74.2875 26.9557 74.26 26.9352 74.232 26.9153C74.2014 26.8933 74.17 26.8721 74.1383 26.8518C74.1077 26.8322 74.0769 26.8135 74.0456 26.7955C74.0144 26.7775 73.9827 26.7606 73.9506 26.7441C73.9178 26.7273 73.885 26.7113 73.8515 26.6964C73.8187 26.6817 73.7858 26.6681 73.7524 26.655C73.7184 26.6417 73.6842 26.629 73.6498 26.6175C73.6156 26.606 73.581 26.5955 73.5463 26.5857C73.5111 26.5757 73.4756 26.5665 73.4399 26.5584C73.4053 26.5503 73.3705 26.5434 73.3353 26.537C73.2977 26.5301 73.26 26.5245 73.222 26.5196C73.1883 26.5153 73.1546 26.5117 73.1204 26.5089C73.0797 26.5056 73.0389 26.5037 72.9982 26.5027C72.9786 26.5025 72.9594 26.5 72.9397 26.5H64.0306C62.8006 26.5 61.8033 27.4972 61.8033 28.7273C61.8033 29.9573 62.8006 30.9545 64.0306 30.9545H67.8421L54.3173 45.5611L48.5297 39.7735C48.1017 39.3454 47.5194 39.113 46.9124 39.1215C46.3072 39.1331 45.7327 39.3904 45.3211 39.8344L26.7605 59.8602C25.9243 60.7624 25.9778 62.1716 26.88 63.0078C27.3088 63.4052 27.8518 63.6016 28.3935 63.6016C28.9919 63.6016 29.5888 63.3618 30.0277 62.8884L47.0157 44.5593L52.8041 50.3477C53.2323 50.7759 53.8208 51.0134 54.4219 50.9997C55.0272 50.9881 55.602 50.7304 56.0133 50.2861L70.7124 34.411V37.6364C70.7124 38.8664 71.7097 39.8636 72.9397 39.8636C74.1697 39.8636 75.167 38.8664 75.167 37.6364V28.7273C75.167 28.7133 75.1652 28.7 75.1649 28.6861C75.1642 28.6466 75.1618 28.6071 75.159 28.5677Z" fill="white" />
                <path d="M72.9397 71.0455H28.3942C27.1642 71.0455 26.1669 72.0427 26.1669 73.2727C26.1669 74.5028 27.1642 75.5 28.3942 75.5H72.9397C74.1697 75.5 75.1669 74.5028 75.1669 73.2727C75.1669 72.0427 74.1697 71.0455 72.9397 71.0455Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_957_678">
                    <rect width="49" height="49" fill="white" transform="translate(26.1669 26.5)" />
                </clipPath>
            </defs>
        </svg>,
    },
];

const partners = [
    {
        name: 'FBI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sodales odio. Aenean a libero augue. Morbi posuere, elit lacinia pharetra tincidunt, diam orci sodales.',
        logo: fbi, // Replace with actual image URL
    },
    {
        name: 'Interpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sodales odio. Aenean a libero augue. Morbi posuere, elit lacinia pharetra tincidunt, diam orci sodales.',
        logo: interpol, // Replace with actual image URL
    },
    {
        name: 'Crowd Strike',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sodales odio. Aenean a libero augue. Morbi posuere, elit lacinia pharetra tincidunt, diam orci sodales.',
        logo: crowdstrise, // Replace with actual image URL
    },
    {
        name: 'NSA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sodales odio. Aenean a libero augue. Morbi posuere, elit lacinia pharetra tincidunt, diam orci sodales.',
        logo: fbi, // Replace with actual image URL
    },
    {
        name: 'CIA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis sodales odio. Aenean a libero augue. Morbi posuere, elit lacinia pharetra tincidunt, diam orci sodales.',
        logo: interpol, // Replace with actual image URL
    },
];

const steps = [
    {
        title: "Report Submission",
        description: "Users report cybercrime by sharing evidence through the bot.",
        icon: notepen, // Replace with actual icon URL
    },
    {
        title: "Processing",
        description: "The bot analyzes the information and sends valid reports to partner companies.",
        icon: notekey, // Replace with actual icon URL
    },
    {
        title: "Review & Reward",
        description: "Companies evaluate the reports and reward users if the recovery is successful.",
        icon: cloudgift, // Replace with actual icon URL
    },
];

const articles = [
    {
        title: "Five Strategies to Optimize Cloud Security in 2021",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        image: computer1, // Replace with actual image URL
    },
    {
        title: "Cyber Criminals Publish Stolen Sepa Data",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        image: computer2, // Replace with actual image URL
    },
    {
        title: "The Security Risks Of Changing Package Owners",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique.",
        image: computer3, // Replace with actual image URL
    },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // Calculate the total number of slides
    const totalSlides = Math.ceil(partners.length / 3);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div>
            <div style={{ background: `url(${background})` }} className="!bg-contain pb-32">
                <header className="text-white py-4 px-6 flex items-center justify-between relative">
                    <div className="flex items-center space-x-4">
                        <div className="text-xl font-semibold flex items-center">
                            <img src={logo} alt="Lexcura Logo" width={139} height={34} />
                        </div>
                    </div>

                    <div className="flex items-center gap-12">
                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="hover:text-primary">Home</a>
                            <a href="#" className="hover:text-primary">About Us</a>
                            <a href="#" className="hover:text-primary">Vision</a>
                            <div className="relative group">
                                <button className="hover:text-primary flex items-center gap-2">
                                    Products
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1L5.70711 4.29289C5.31658 4.68342 4.68342 4.68342 4.29289 4.29289L1 1" stroke="white" strokeOpacity="0.8" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <div className="absolute hidden group-hover:block bg-[#0a0a0a] border border-gray-600 mt-2 py-2 w-32">
                                    <a href="#" className="block px-4 py-2 hover:bg-primary">Product 1</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-primary">Product 2</a>
                                </div>
                            </div>
                            <a href="#" className="hover:text-primary">Partners</a>
                        </nav>

                        {/* Hamburger Icon for Mobile */}
                        <button className="md:hidden" onClick={toggleMenu}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>

                        {/* Menu Button */}
                        <a href="https://t.me/TgMiniReportAppBot" target="_blank" className="bg-primary text-white px-4 py-2 rounded-md items-center hover:bg-primary hidden md:flex">
                            @REPORT ON TELEGRAM
                        </a>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-[#010314] text-white py-4 flex flex-col items-center md:hidden">
                            <a href="#" className="py-2 w-full text-center hover:bg-primary">Home</a>
                            <a href="#" className="py-2 w-full text-center hover:bg-primary">About Us</a>
                            <a href="#" className="py-2 w-full text-center hover:bg-primary">Vision</a>
                            <a href="#" className="py-2 w-full text-center hover:bg-primary">Products</a>
                            <a href="#" className="py-2 w-full text-center hover:bg-primary">Partners</a>
                            <a href="https://t.me/TgMiniReportAppBot" target="_blank" className="bg-primary text-white px-4 py-2 rounded-md mt-4 hover:bg-primary">
                                @REPORT ON TELEGRAM
                            </a>
                        </div>
                    )}
                </header>

                <div className="mt-20">
                    <div className="flex items-center justify-center">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.233 19.0245C23.2095 22.794 19.4055 25.752 15.006 27C10.6035 25.752 6.7995 22.794 4.776 19.0245C2.76 15.2715 2.463 10.7205 3.897 5.8125C5.94 5.679 10.4745 5.1405 15.006 3C19.536 5.1405 24.0705 5.679 26.112 5.8125C27.549 10.7205 27.249 15.2715 25.233 19.0245ZM13.5 13.5C13.5 13.8978 13.658 14.2794 13.9393 14.5607C14.2206 14.842 14.6022 15 15 15C15.3978 15 15.7794 14.842 16.0607 14.5607C16.342 14.2794 16.5 13.8978 16.5 13.5V10.5C16.5 10.1022 16.342 9.72064 16.0607 9.43934C15.7794 9.15804 15.3978 9 15 9C14.6022 9 14.2206 9.15804 13.9393 9.43934C13.658 9.72064 13.5 10.1022 13.5 10.5V13.5ZM13.5 19.5C13.5 19.8978 13.658 20.2794 13.9393 20.5607C14.2206 20.842 14.6022 21 15 21C15.3978 21 15.7794 20.842 16.0607 20.5607C16.342 20.2794 16.5 19.8978 16.5 19.5C16.5 19.1022 16.342 18.7206 16.0607 18.4393C15.7794 18.158 15.3978 18 15 18C14.6022 18 14.2206 18.158 13.9393 18.4393C13.658 18.7206 13.5 19.1022 13.5 19.5Z" fill="#50A8EB" />
                        </svg>
                        <label className="text-primary ml-4">WELCOME TO TELEGRAM REPORT BOT</label>
                    </div>
                    <div className="w-full">
                        <h1 className="text-[76px] text-white my-0 mx-auto text-center leading-[91.2px]">
                            A Modern Solution to Cybercrime
                        </h1>
                    </div>
                    <p className="text-white text-center mt-5">
                        Helping compaines recover stolen assets through collaboration, not fear.
                    </p>

                    <a
                        href="https://t.me/TgMiniReportAppBot" // replace with actual link
                        target="_blank"
                        className="bg-primary text-white px-4 py-2 w-[345px] my-0 mx-auto rounded-md flex items-center hover:bg-primary mt-8"
                    >
                        LAUNCH @REPORT ON TELEGRAM
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_393_2871)">
                                <path d="M19.2 4.39997L2.89997 10.7C1.79997 11.1 1.79997 11.8 2.69997 12L6.79997 13.3L8.39997 18.1C8.59997 18.6 8.49997 18.8 8.99997 18.8C9.39997 18.8 9.59997 18.6 9.79997 18.4C9.89997 18.3 10.8 17.4 11.8 16.4L16 19.5C16.8 19.9 17.3 19.7 17.5 18.8L20.3 5.69997C20.6 4.59997 19.9 3.99997 19.2 4.39997ZM17.1 7.39997L9.29997 14.5L8.99997 17.8L7.39997 13L16.6 7.19997C17 6.89997 17.4 7.09997 17.1 7.39997Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_393_2871">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="bg-[#010314] text-white py-16 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Section */}
                <div className="md:w-2/3 space-y-10">
                    <div>
                        <h2 className="text-blue-400 text-lg uppercase mb-2">About Us</h2>
                        <h1 className="text-4xl font-bold mb-4 text-center md:text-start">Our Mission</h1>
                        <p className="text-gray-300">
                            Our mission is to create an innovative platform that empowers companies to recover stolen assets by tapping into community-driven intelligence.
                            Instead of punitive measures, we focus on creating incentives for individuals to report crimes, ensuring that the outcome benefits both companies and the reporting community.
                        </p>
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-center md:text-start">Our Approach</h1>
                        <p className="text-gray-300">
                            We use mutual-benefit strategies, offering rewards to users who provide key information that helps retrieve stolen funds. This non-fear-based approach is more likely to lead to success, as individuals are motivated by the possibility of rewards rather than fear of legal consequences.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-6 pt-6">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_393_2953)">
                                <path d="M18.6655 8.47127C18.6705 8.47127 18.6773 8.47127 18.684 8.47127C18.8604 8.47127 19.024 8.52612 19.1582 8.62062L19.1557 8.61893C19.2535 8.70415 19.3194 8.82396 19.3354 8.95896V8.96149C19.3523 9.06443 19.3615 9.18256 19.3615 9.30321C19.3615 9.35806 19.3599 9.41206 19.3556 9.46605V9.45846C19.1658 11.4573 18.3423 16.3046 17.9238 18.5423C17.7466 19.4898 17.3981 19.8071 17.0606 19.8374C16.3274 19.9058 15.7705 19.3531 15.0601 18.8874C13.948 18.1575 13.3195 17.7036 12.2403 16.9923C10.9924 16.1713 11.8015 15.7182 12.512 14.9808C12.6985 14.7867 15.9309 11.8463 15.9941 11.5796C15.9975 11.5636 15.9992 11.5459 15.9992 11.5273C15.9992 11.4615 15.9747 11.4016 15.9351 11.3561C15.8912 11.3274 15.8364 11.3113 15.779 11.3113C15.741 11.3113 15.7047 11.3189 15.671 11.3316L15.6727 11.3307C15.5613 11.3561 13.7849 12.53 10.3435 14.8526C9.96808 15.1487 9.49389 15.336 8.97752 15.358H8.97246C8.24092 15.2694 7.57689 15.1065 6.94661 14.8745L7.00905 14.8947C6.21761 14.6366 5.58902 14.5007 5.64302 14.0636C5.6717 13.8364 5.98502 13.6038 6.58295 13.3659C10.2662 11.7611 12.7224 10.7033 13.9514 10.1925C15.3073 9.47281 16.8792 8.88049 18.5321 8.49659L18.6646 8.47043L18.6655 8.47127ZM13.441 0.864868C6.43614 0.881743 0.763611 6.5644 0.763611 13.5717C0.763611 20.5892 6.45217 26.2786 13.4705 26.2786C20.4888 26.2786 26.1774 20.5901 26.1774 13.5717C26.1774 6.5644 20.5048 0.881743 13.5017 0.864868H13.5C13.4803 0.864868 13.4606 0.864868 13.441 0.864868Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_393_2953">
                                    <rect width="27" height="27" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.24858 2.79846L13.4273 12.3971L6.20325 20.2011H7.82909L14.1537 13.3686L19.2638 20.2011H24.7966L17.214 10.0626L23.9381 2.79846H22.3123L16.4876 9.09113L11.7814 2.79846H6.24858ZM8.6395 3.99606H11.1813L22.4053 19.0033H19.8636L8.6395 3.99606Z" fill="white" />
                        </svg>

                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3488 4.01831H4.65117C4.65117 4.01831 0 4.01831 0 8.66948V18.3199C0 18.3199 8.04663e-07 22.971 4.65117 22.971H22.3488C22.3488 22.971 27 22.971 27 18.3199V8.66948C27 8.66948 27 4.01831 22.3488 4.01831ZM9.90351 18.689V8.30034L18.7418 13.5L9.90351 18.689Z" fill="white" />
                        </svg>

                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_393_2957)">
                                <path d="M17.8894 17.8966H14.7833V13.0226C14.7833 11.8604 14.7591 10.3668 13.1591 10.3668C11.5395 10.3668 11.2928 11.6274 11.2928 12.9367V17.8959H8.18278V7.87434H11.17V9.24131H11.2101C11.6274 8.45184 12.6427 7.62169 14.1573 7.62169C17.3079 7.62169 17.8927 9.69609 17.8927 12.3933V17.8959L17.8894 17.8966ZM4.66922 6.50475C4.43184 6.50484 4.19677 6.45809 3.97748 6.36719C3.75819 6.27629 3.559 6.14302 3.39129 5.97501C3.22359 5.807 3.09068 5.60756 3.00018 5.38811C2.90968 5.16866 2.86336 4.93351 2.86387 4.69613C2.86426 4.33883 2.97059 3.98967 3.1694 3.6928C3.36821 3.39593 3.65059 3.16467 3.98082 3.02827C4.31105 2.89187 4.67432 2.85645 5.02468 2.92649C5.37504 2.99653 5.69677 3.16888 5.94919 3.42176C6.2016 3.67463 6.37337 3.99667 6.44278 4.34716C6.51218 4.69765 6.4761 5.06085 6.3391 5.39083C6.2021 5.72082 5.97033 6.00277 5.6731 6.20105C5.37586 6.39932 5.02651 6.50501 4.66922 6.50475ZM6.22716 17.8966H3.11062V7.875H6.22716V17.8966ZM19.4486 0H1.54875C0.693656 0 0 0.676594 0 1.51397V19.4867C0 20.3241 0.693656 21.0007 1.54875 21.0007H19.4453C20.2991 21.0007 21 20.3241 21 19.4867V1.51397C21 0.676594 20.2991 0 19.4453 0H19.4486Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_393_2957">
                                    <rect width="21" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_393_2959)">
                                <path d="M15 2.5C21.9035 2.5 27.5 8.09644 27.5 15C27.5 21.9035 21.9035 27.5 15 27.5C8.09644 27.5 2.5 21.9035 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5ZM17.5004 16.7496L15.5451 18.3137C15.2542 18.5464 15.2302 18.9802 15.4936 19.2437L17.0419 20.7919C17.3422 21.0922 17.5611 21.4644 17.6779 21.8729L17.8966 22.6386C18.0937 23.3282 18.5776 23.8351 19.1676 24.0927C20.3702 23.5406 21.4445 22.757 22.3332 21.7987L22.0409 19.4526C21.9372 18.6231 21.4259 17.9004 20.6782 17.5266L18.8402 16.6076C18.4041 16.3896 17.8811 16.445 17.5004 16.7496ZM15.0002 5.00012C11.7773 5.00012 8.91038 6.52487 7.0816 8.89237L6.87524 9.16925V11.2754C6.87524 12.8455 7.85179 14.2402 9.30659 14.7861L9.52834 14.8615L11.1416 15.3549C12.8578 15.8799 14.5289 14.4832 14.3627 12.7353L14.3389 12.5532L14.1205 11.2429C14.0195 10.637 14.373 10.0555 14.9403 9.85754L15.0749 9.81882L15.8396 9.64402C17.1191 9.35156 18.1079 8.33542 18.3654 7.04841C18.4665 6.54274 18.4472 6.03824 18.3259 5.56642C17.2855 5.19965 16.1661 5.00012 15.0002 5.00012Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_393_2959">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                </div>

                {/* Right Section - Robot Image */}
                <div className="mt-10 md:mt-0 md:w-1/3 flex justify-center">
                    <img
                        src={robot}  // Replace with the actual path to your robot image
                        alt="Robot Illustration"
                        className="w-568 h-568 object-contain"
                    />
                </div>
            </div>

            <div className="relative bg-[#010314] py-16 pb-48">
                <section className="text-white px-4 md:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-blue-400 uppercase text-sm mb-2">Features</h2>
                        <h1 className="text-4xl font-bold">Our Approach</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featureData.map((feature, index) => (
                            <div key={index} className="bg-[#FFFFFF] bg-opacity-5 rounded-lg p-3 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-[#000F1B] rounded-lg p-3 shadow-inner">
                                    <div className="mb-4 flex justify-center">{feature.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 mb-4">{feature.description}</p>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors duration-300">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="absolute bottom-0 w-100">
                    <img src={rectangle} />
                </div>
            </div>

            <div style={{ background: `url(${serviceBg})` }} className="!bg-[#023963] !bg-contain text-white  bg-opacity-10 py-16">
                <div className="mx-auto px-4 md:px-20 text-center">
                    <p className="text-sm uppercase tracking-wider text-primary">Services</p>
                    <h2 className="text-4xl font-bold mb-12">Our Services</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white bg-opacity-5 rounded-lg p-6 text-left">
                            <img
                                src={coinPlant} // Replace with actual image URL
                                alt="Fund Recovery"
                                className="w-full md:w-[544px] h-[auto] object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-center md:text-start">Fund Recovery</h3>
                            <p className="text-gray-300 text-sm text-center md:text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                lacinia lectus eget ante commodo, quis venenatis nibh tristique.
                                Orci varius natoque.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-5 rounded-lg p-6 text-left">
                            <img
                                src={ongoingProtection} // Replace with actual image URL
                                alt="Ongoing Protection"
                                className="w-full md:w-[544px] h-[auto] object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-center md:text-start">Ongoing Protection</h3>
                            <p className="text-gray-300 text-sm text-center md:text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                lacinia lectus eget ante commodo, quis venenatis nibh tristique.
                                Orci varius natoque.
                            </p>
                        </div>

                        <div className="bg-white bg-opacity-5 rounded-lg p-6 text-left">
                            <img
                                src={hacker} // Replace with actual image URL
                                alt="Planned Expansion"
                                className="w-full md:w-[544px] h-[auto] object-cover rounded-md mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 text-center md:text-start">Planned Expansion</h3>
                            <p className="text-gray-300 text-sm text-center md:text-start">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                lacinia lectus eget ante commodo, quis venenatis nibh tristique.
                                Orci varius natoque.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#010314] text-white py-16">
                <div className="mx-auto px-4 md:px-20 text-center">
                    <p className="text-sm uppercase tracking-wider text-primary">Our Partners</p>
                    <h2 className="text-4xl font-bold mb-12">Cybersecurity Partners Companies</h2>

                    <div className="relative overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {/* Each "slide" contains 3 cards */}
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="flex flex-col sm:flex-row min-w-full"
                                >
                                    {partners.slice(slideIndex * 3, slideIndex * 3 + 3).map((partner, index) => (
                                        <div
                                            key={index}
                                            className="bg-gradient-to-b from-[#1A1C2F] from-0% via-[#1A1C2F] via-[45%] to-[#1A1C2F] to-100% rounded-lg p-6 mx-2 flex-shrink-0 w-full sm:w-1/3 mt-2 flex"
                                        >
                                            <div>
                                                <h3 className="text-xl font-semibold mb-4">{partner.name}</h3>
                                                <p className="text-gray-300 text-sm mb-4">{partner.description}</p>
                                            </div>
                                            <div className="flex items-end">
                                                <img src={partner.logo} alt={`${partner.name} logo`} className="w-84 h-84 mx-auto" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-3xl p-2 text-gray-500 hover:text-white"
                        >
                            &#10094;
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl p-2 text-gray-500 hover:text-white"
                        >
                            &#10095;
                        </button>
                    </div>

                    {/* Indicator Dots */}
                    <div className="mt-6 flex justify-center space-x-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <span
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 w-2 rounded-full cursor-pointer ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-500'
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>


            <section className="bg-[#010314] py-16 text-white">
                <div className="mx-auto px-4 md:px-20 text-center">
                    <p className="text-sm uppercase tracking-wider text-primary mb-4">How It Works</p>
                    <h2 className="text-4xl font-bold mb-12">How the Bot Works</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-[#081F32] p-8 rounded-lg text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                                <img src={step.icon} alt={`${step.title} icon`} className="w-48 mt-4 mx-auto md:mx-0" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <div className="bg-[#010314] text-white py-16 px-4 md:px-20">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-blue-300 uppercase text-sm mb-2">Our News</h2>
                        <h1 className="text-4xl font-bold mb-8">Latest News</h1>
                    </div>
                    <button className="bg-primary py-2 px-4 rounded-lg text-[16px]">READ MORE</button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img src={article.image} alt={article.title} className="w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                                <p className="text-gray-400 mb-4">{article.description}</p>
                                <a href="#" className="text-blue-400 font-semibold flex items-center">
                                    Read More <span className="ml-1 text-lg">&#8594;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <div className="bg-cover bg-center bg-no-repeat py-20 px-4 md:px-20" style={{ backgroundImage: `url(${protectbg})` }}>
                <div className="flex flex-col items-center justify-center text-center text-white px-4">
                    <h2 className="text-3xl font-bold mb-4">Report on Telegram:</h2>
                    <p className="text-gray-300 max-w-xl mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia lectus eget ante commodo, quis venenatis nibh tristique. Orci varius natoque
                    </p>
                    <a
                        href="https://t.me/TgMiniReportAppBot" // replace with actual link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center"
                    >
                        Launch @report on Telegram
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2L11 13"></path>
                            <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
                        </svg>
                    </a>
                </div>
            </div>


            <footer className="bg-gray-900 text-gray-400 py-4 px-8 flex flex-col md:flex-row items-center justify-between">
                <div className="text-sm mb-4 md:mb-0">
                    © Copyright Report 2024. All rights reserved
                </div>
                <div className="flex space-x-6 text-sm">
                    <a href="#" className="hover:text-white">Terms and Conditions</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white">

                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_393_2953)">
                                <path d="M18.6655 8.47127C18.6705 8.47127 18.6773 8.47127 18.684 8.47127C18.8604 8.47127 19.024 8.52612 19.1582 8.62062L19.1557 8.61893C19.2535 8.70415 19.3194 8.82396 19.3354 8.95896V8.96149C19.3523 9.06443 19.3615 9.18256 19.3615 9.30321C19.3615 9.35806 19.3599 9.41206 19.3556 9.46605V9.45846C19.1658 11.4573 18.3423 16.3046 17.9238 18.5423C17.7466 19.4898 17.3981 19.8071 17.0606 19.8374C16.3274 19.9058 15.7705 19.3531 15.0601 18.8874C13.948 18.1575 13.3195 17.7036 12.2403 16.9923C10.9924 16.1713 11.8015 15.7182 12.512 14.9808C12.6985 14.7867 15.9309 11.8463 15.9941 11.5796C15.9975 11.5636 15.9992 11.5459 15.9992 11.5273C15.9992 11.4615 15.9747 11.4016 15.9351 11.3561C15.8912 11.3274 15.8364 11.3113 15.779 11.3113C15.741 11.3113 15.7047 11.3189 15.671 11.3316L15.6727 11.3307C15.5613 11.3561 13.7849 12.53 10.3435 14.8526C9.96808 15.1487 9.49389 15.336 8.97752 15.358H8.97246C8.24092 15.2694 7.57689 15.1065 6.94661 14.8745L7.00905 14.8947C6.21761 14.6366 5.58902 14.5007 5.64302 14.0636C5.6717 13.8364 5.98502 13.6038 6.58295 13.3659C10.2662 11.7611 12.7224 10.7033 13.9514 10.1925C15.3073 9.47281 16.8792 8.88049 18.5321 8.49659L18.6646 8.47043L18.6655 8.47127ZM13.441 0.864868C6.43614 0.881743 0.763611 6.5644 0.763611 13.5717C0.763611 20.5892 6.45217 26.2786 13.4705 26.2786C20.4888 26.2786 26.1774 20.5901 26.1774 13.5717C26.1774 6.5644 20.5048 0.881743 13.5017 0.864868H13.5C13.4803 0.864868 13.4606 0.864868 13.441 0.864868Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_393_2953">
                                    <rect width="27" height="27" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.24858 2.79846L13.4273 12.3971L6.20325 20.2011H7.82909L14.1537 13.3686L19.2638 20.2011H24.7966L17.214 10.0626L23.9381 2.79846H22.3123L16.4876 9.09113L11.7814 2.79846H6.24858ZM8.6395 3.99606H11.1813L22.4053 19.0033H19.8636L8.6395 3.99606Z" fill="white" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3488 4.01831H4.65117C4.65117 4.01831 0 4.01831 0 8.66948V18.3199C0 18.3199 8.04663e-07 22.971 4.65117 22.971H22.3488C22.3488 22.971 27 22.971 27 18.3199V8.66948C27 8.66948 27 4.01831 22.3488 4.01831ZM9.90351 18.689V8.30034L18.7418 13.5L9.90351 18.689Z" fill="white" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_393_2957)">
                                <path d="M17.8894 17.8966H14.7833V13.0226C14.7833 11.8604 14.7591 10.3668 13.1591 10.3668C11.5395 10.3668 11.2928 11.6274 11.2928 12.9367V17.8959H8.18278V7.87434H11.17V9.24131H11.2101C11.6274 8.45184 12.6427 7.62169 14.1573 7.62169C17.3079 7.62169 17.8927 9.69609 17.8927 12.3933V17.8959L17.8894 17.8966ZM4.66922 6.50475C4.43184 6.50484 4.19677 6.45809 3.97748 6.36719C3.75819 6.27629 3.559 6.14302 3.39129 5.97501C3.22359 5.807 3.09068 5.60756 3.00018 5.38811C2.90968 5.16866 2.86336 4.93351 2.86387 4.69613C2.86426 4.33883 2.97059 3.98967 3.1694 3.6928C3.36821 3.39593 3.65059 3.16467 3.98082 3.02827C4.31105 2.89187 4.67432 2.85645 5.02468 2.92649C5.37504 2.99653 5.69677 3.16888 5.94919 3.42176C6.2016 3.67463 6.37337 3.99667 6.44278 4.34716C6.51218 4.69765 6.4761 5.06085 6.3391 5.39083C6.2021 5.72082 5.97033 6.00277 5.6731 6.20105C5.37586 6.39932 5.02651 6.50501 4.66922 6.50475ZM6.22716 17.8966H3.11062V7.875H6.22716V17.8966ZM19.4486 0H1.54875C0.693656 0 0 0.676594 0 1.51397V19.4867C0 20.3241 0.693656 21.0007 1.54875 21.0007H19.4453C20.2991 21.0007 21 20.3241 21 19.4867V1.51397C21 0.676594 20.2991 0 19.4453 0H19.4486Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_393_2957">
                                    <rect width="21" height="21" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">

                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_393_2959)">
                                <path d="M15 2.5C21.9035 2.5 27.5 8.09644 27.5 15C27.5 21.9035 21.9035 27.5 15 27.5C8.09644 27.5 2.5 21.9035 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5ZM17.5004 16.7496L15.5451 18.3137C15.2542 18.5464 15.2302 18.9802 15.4936 19.2437L17.0419 20.7919C17.3422 21.0922 17.5611 21.4644 17.6779 21.8729L17.8966 22.6386C18.0937 23.3282 18.5776 23.8351 19.1676 24.0927C20.3702 23.5406 21.4445 22.757 22.3332 21.7987L22.0409 19.4526C21.9372 18.6231 21.4259 17.9004 20.6782 17.5266L18.8402 16.6076C18.4041 16.3896 17.8811 16.445 17.5004 16.7496ZM15.0002 5.00012C11.7773 5.00012 8.91038 6.52487 7.0816 8.89237L6.87524 9.16925V11.2754C6.87524 12.8455 7.85179 14.2402 9.30659 14.7861L9.52834 14.8615L11.1416 15.3549C12.8578 15.8799 14.5289 14.4832 14.3627 12.7353L14.3389 12.5532L14.1205 11.2429C14.0195 10.637 14.373 10.0555 14.9403 9.85754L15.0749 9.81882L15.8396 9.64402C17.1191 9.35156 18.1079 8.33542 18.3654 7.04841C18.4665 6.54274 18.4472 6.03824 18.3259 5.56642C17.2855 5.19965 16.1661 5.00012 15.0002 5.00012Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_393_2959">
                                    <rect width="30" height="30" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Home;