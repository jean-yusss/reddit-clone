import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from '@apollo/client';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/outline';

import { GET_ALL_VOTES_BY_POST_ID } from '../graphql/queries';
import { ADD_VOTE } from '../graphql/mutations';

interface Props {
	post: Post;
}

const PostVote = ({ post }: Props) => {
	const { data: session } = useSession();
	const [vote, setVote] = useState<boolean>();

	const { data } = useQuery(GET_ALL_VOTES_BY_POST_ID, {
		variables: { post_id: post?.id }
	});

	const displayVotes = (data: any) => {
		const votes: Vote[] = data?.getVotesByPostId;

		const displayNumber = votes?.reduce(
			(total, vote) => (vote.upvote ? (total += 1) : (total -= 1)),
			0
		);

		if (votes?.length === 0) return 0;

		if (displayNumber === 0) {
			return votes[0]?.upvote ? 1 : -1;
		}

		return displayNumber;
	};

	const upVote = async (isUpvote: boolean) => {
		if (!session) {
			toast('❗️ You need to be signed in to vote!');
			return;
		}

		if (vote && isUpvote) return;
		if (vote === false && !isUpvote) return;

		await addVote({
			variables: { post_id: post.id, username: session?.user?.name, upvote: isUpvote }
		});
	};

	const [addVote] = useMutation(ADD_VOTE, {
		refetchQueries: [GET_ALL_VOTES_BY_POST_ID, 'getVotesByPostId']
	});

	useEffect(() => {
		const votes: Vote[] = data?.getVotesByPostId;
		const vote = votes?.find(vote => vote.username == session?.user?.name)?.upvote;
		setVote(vote);
	}, [data]);

	return (
		<div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400'>
			<ArrowUpIcon
				onClick={() => upVote(true)}
				className={`voteButton hover:text-red-400 ${vote && 'text-red-400'}`}
			/>
			<p className='text-black font-bold text-xs'>{displayVotes(data)}</p>
			<ArrowDownIcon
				onClick={() => upVote(false)}
				className={`voteButton hover:text-blue-400 ${vote === false && 'text-blue-400'}`}
			/>
		</div>
	);
};

export default PostVote;
