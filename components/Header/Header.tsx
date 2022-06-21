import Link from 'next/link';
import Image from 'next/image';

import HeaderAuth from '../HeaderAuth/HeaderAuth';

import * as S from './HeaderStyles';

const Header = () => (
	<S.HeaderContainer>
		<S.LogoContainer>
			<Link href='/'>
				<Image
					src='https://i.imgur.com/HgWhQf3.png'
					alt=''
					layout='fill'
					objectFit='contain'
				/>
			</Link>
		</S.LogoContainer>

		<S.Explorer>
			<S.Home />
			<S.HomeText>Home</S.HomeText>
			<S.DropdownIcon />
		</S.Explorer>

		<S.SearchBar>
			<S.Search />
			<S.SearchInput />
			<S.SearchButton hidden />
		</S.SearchBar>

		<S.IconContainer>
			<S.Sparkles />
			<S.Globe />
			<S.VideoCamera />
			<S.Break />
			<S.Chat />
			<S.Bell />
			<S.Plus />
			<S.Speakerphone />
		</S.IconContainer>

		<S.MenuContainer>
			<S.Menu />
		</S.MenuContainer>

		<HeaderAuth />
	</S.HeaderContainer>
);

export default Header;
