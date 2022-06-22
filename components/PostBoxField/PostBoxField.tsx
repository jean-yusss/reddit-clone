import { PostBoxFieldContainer, Field } from './PostBoxFieldStyles';

interface Props {
	title?: string;
	children: JSX.Element;
}

const PostBoxField = ({ title, children }: Props) => (
	<PostBoxFieldContainer>
		<Field>{title}</Field>
		{children}
	</PostBoxFieldContainer>
);

export default PostBoxField;
