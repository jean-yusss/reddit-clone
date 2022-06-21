import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const HeaderAuth = () => {
	const { data: session } = useSession();

	return (
		<div
			className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer'
			onClick={session ? () => signOut() : () => signIn()}
		>
			<div className='relative h-5 w-5 flex-shrink-0'>
				<Image src='https://i.imgur.com/B84ZNX4.png' alt='' layout='fill' />
			</div>

			{session ? (
				<div className='flex items-center text-xs'>
					<div className='flex flex-col'>
						<p className='truncate'>{session?.user?.name}</p>
						<p className='text-gray-400'>1 Karma</p>
					</div>

					<ChevronDownIcon className='h-4 flex-shrink-0 text-gray-400 ml-20' />
				</div>
			) : (
				<p className='text-gray-400'>Sign In</p>
			)}
		</div>
	);
};

export default HeaderAuth;
