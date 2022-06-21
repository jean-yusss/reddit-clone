import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { AvatarContainer } from './AvatarStyles';

interface Props {
	seed?: string;
	large?: boolean;
}

const Avatar = ({ seed, large }: Props) => {
	const { data: session } = useSession();

	return (
		<AvatarContainer $large={large}>
			<Image
				src={`https://avatars.dicebear.com/api/open-peeps/${
					seed || session?.user?.name
				}.svg`}
				alt=''
				layout='fill'
			/>
		</AvatarContainer>
	);
};

export default Avatar;
