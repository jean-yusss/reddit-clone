import Link from 'next/link';

import Avatar from '../Avatar/Avatar';

import * as S from './SubredditRowStyles';

interface Props {
	topic: string;
	index: number;
}

const SubredditRow = ({ topic, index }: Props) => (
	<S.SubredditRowContainer>
		<S.RowCount>{index + 1}</S.RowCount>
		<S.UpArrowIcon />
		<Avatar seed={topic} />
		<S.Subreddit>r/{topic}</S.Subreddit>

		<Link href={`/subreddit/${topic}`}>
			<S.ViewButton>View</S.ViewButton>
		</Link>
	</S.SubredditRowContainer>
);

export default SubredditRow;
