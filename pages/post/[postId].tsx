import toast from 'react-hot-toast';
import TimeAgo from 'react-timeago';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useMutation, useQuery } from '@apollo/client';
import { SubmitHandler, useForm } from 'react-hook-form';

import Post from '../../components/Post/Post';
import Avatar from '../../components/Avatar/Avatar';

import { ADD_COMMENT } from '../../graphql/mutations';
import { GET_POST_BY_POST_ID } from '../../graphql/queries';

import * as S from '../../styles/PostPageStyles';

interface FormData {
	comment: string;
}

const PostPage = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const [addComment] = useMutation(ADD_COMMENT, {
		refetchQueries: [GET_POST_BY_POST_ID, 'getPostListByPostId']
	});

	const { data } = useQuery(GET_POST_BY_POST_ID, {
		variables: {
			post_id: router.query.postId
		}
	});

	const post: Post = data?.getPostListByPostId;

	const { register, handleSubmit, setValue } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async data => {
		const notification = toast.loading('Posting your comment...');

		await addComment({
			variables: {
				post_id: router.query.postId,
				username: session?.user?.name,
				text: data.comment
			}
		});

		setValue('comment', '');
		toast.success('Your comment has been posted!', { id: notification });
	};

	return (
		<S.PostPageContainer>
			<Post post={post} />

			<S.CommentBoxContainer>
				{session && (
					<S.CommentAs>
						Comment as
						<S.UserName>{` ${session?.user?.name}`}</S.UserName>
					</S.CommentAs>
				)}

				<S.CommentBox onSubmit={handleSubmit(onSubmit)}>
					<S.CommentInput
						placeholder={
							session ? 'What are your thoughts?' : 'Please sign in to comment'
						}
						disabled={!session}
						{...register('comment')}
					/>
					<S.CommentButton disabled={!session}>Comment</S.CommentButton>
				</S.CommentBox>
			</S.CommentBoxContainer>

			<S.Comments>
				<S.LineBreak />
				{post?.comments.map(comment => (
					<S.CommentContainer key={comment.id}>
						<S.Line />
						<S.AvatarContainer>
							<Avatar seed={comment.username} />
						</S.AvatarContainer>

						<S.PostedCommentContainer>
							<S.PostedCommentInfo>
								<S.CommentBy>{comment.username} </S.CommentBy>
								• <TimeAgo date={comment.created_at} />
							</S.PostedCommentInfo>
							<S.CommentText>{comment.text}</S.CommentText>
						</S.PostedCommentContainer>
					</S.CommentContainer>
				))}
			</S.Comments>
		</S.PostPageContainer>
	);
};

export default PostPage;
