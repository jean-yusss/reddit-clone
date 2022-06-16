import Image from 'next/image';
import { HomeIcon, MenuIcon, SearchIcon } from '@heroicons/react/solid';

import {
	BellIcon,
	ChatIcon,
	GlobeIcon,
	PlusIcon,
	SparklesIcon,
	SpeakerphoneIcon,
	VideoCameraIcon,
	ChevronDownIcon
} from '@heroicons/react/outline';

const Header = () => {
	return (
		<div className='flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50'>
			<div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
				<Image
					src='https://i.imgur.com/HgWhQf3.png'
					alt=''
					layout='fill'
					objectFit='contain'
				/>
			</div>

			<div className='flex items-center mx-7 xl:min-w-[300px]'>
				<HomeIcon className='h-5 w-5' />
				<p className='flex-1 ml-2 hidden lg:inline'>Home</p>
				<ChevronDownIcon className='h-4 w-4' />
			</div>

			<form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-sm bg-gray-100 px-3 py-1'>
				<SearchIcon className='h-6 w-6 text-gray-400' />
				<input
					type='text'
					placeholder='Search Reddit'
					className='flex-1 bg-transparent outline-none'
				/>
				<button type='submit' hidden />
			</form>

			<div className='text-[#1A1A1B] space-x-2 items-center mx-5 hidden lg:inline-flex'>
				<SparklesIcon className='icon' />
				<GlobeIcon className='icon' />
				<VideoCameraIcon className='icon' />
				<hr className='h-10 border border-gray-100' />
				<ChatIcon className='icon' />
				<BellIcon className='icon' />
				<PlusIcon className='icon' />
				<SpeakerphoneIcon className='icon' />
			</div>

			<div className='ml-5 flex items-center lg:hidden'>
				<MenuIcon className='icon' />
			</div>

			<div className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer'>
				<div className='relative h-5 w-5 flex-shrink-0'>
					<Image src='https://i.imgur.com/B84ZNX4.png' alt='' layout='fill' />
				</div>

				<p className='text-gray-400'>Sign In</p>
			</div>
		</div>
	);
};

export default Header;
