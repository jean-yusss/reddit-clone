import * as S from './PostFooterStyles';

interface Props {
	post: Post;
}

const PostFooter = ({ post }: Props) => (
	<S.PostFooterContainer>
		<S.PostButtonContainer>
			<S.Chat />
			<S.Comments>{post.comments.length} Comments</S.Comments>
		</S.PostButtonContainer>

		<S.PostButtonContainer>
			<S.Gift />
			<S.FooterText>Award</S.FooterText>
		</S.PostButtonContainer>

		<S.PostButtonContainer>
			<S.Share />
			<S.FooterText>Share</S.FooterText>
		</S.PostButtonContainer>

		<S.PostButtonContainer>
			<S.Bookmark />
			<S.FooterText>Save</S.FooterText>
		</S.PostButtonContainer>

		<S.PostButtonContainer>
			<S.Dots />
		</S.PostButtonContainer>
	</S.PostFooterContainer>
);

export default PostFooter;
