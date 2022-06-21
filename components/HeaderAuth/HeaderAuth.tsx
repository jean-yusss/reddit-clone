import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

import * as S from './HeaderAuthStyles';

const HeaderAuth = () => {
	const { data: session } = useSession();

	return (
		<S.HeaderAuthContainer onClick={session ? () => signOut() : () => signIn()}>
			<S.ImageContainer>
				<Image src='https://i.imgur.com/B84ZNX4.png' alt='' layout='fill' />
			</S.ImageContainer>

			{session ? (
				<S.UserContainer>
					<S.UserInfo>
						<S.UserName>{session?.user?.name}</S.UserName>
						<S.Karma>1 Karma</S.Karma>
					</S.UserInfo>

					<S.ChevronDown />
				</S.UserContainer>
			) : (
				<S.SignIn>Sign In</S.SignIn>
			)}
		</S.HeaderAuthContainer>
	);
};

export default HeaderAuth;
