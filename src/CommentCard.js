import styled from "styled-components";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime); 
// makes the time relative to today (eg 9 days ago)


const CommentCard = ({ imageUrl, userName, datePosted, children}) => {

    return (
        <Wrapper>
            <ProfileImage src={imageUrl}/>
            <Details>
                <UserName>
                    <a href={userName}>{userName}</a>
                </UserName>
                <Comment>
                    {children}
                </Comment>
                <Info>
                    Like &#8226; Reply &#8226; {dayjs().to(dayjs(datePosted))}
                </Info>
            </Details>
        </Wrapper>
    )
}

const Wrapper = styled.li`
    display: flex;
    margin: 10px auto;
    width: 500px;
    background-color: #efebebeb;
    padding: 10px;
    border-radius: 5px;

`

const ProfileImage = styled.img.attrs(props => ({ src: props.src }))`
    width: 100px;
    height: 100px;
    opacity: 0.8;
`;

const Comment = styled.blockquote`
    margin: 10px 0;
    font-size: 1.1rem;
`;

const Info = styled.span`
    color: #5252f9; 
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    font-size: 0.8rem;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

const UserName = styled.div`
    color: #5252f9; 
    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export default CommentCard;