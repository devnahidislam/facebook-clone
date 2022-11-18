import React from 'react';
import Post from './Post';
import './posts.scss';
import Share from './Share';

const Posts = () => {
  // Temporary Posts data
  const posts = [
    {
      id: 1,
      name: 'Jobair Hossain',
      userId: 1,
      profilePic:
        'https://media-exp1.licdn.com/dms/image/D4E03AQGhyXgXBxNBQQ/profile-displayphoto-shrink_800_800/0/1668707540248?e=1674086400&v=beta&t=tLn6XM5sCD3s0OXhYlDSGgG3aG7CItWJ8Q5cvuPIkik',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam?',
      img: 'https://media-exp1.licdn.com/dms/image/D4E03AQGhyXgXBxNBQQ/profile-displayphoto-shrink_800_800/0/1668707540248?e=1674086400&v=beta&t=tLn6XM5sCD3s0OXhYlDSGgG3aG7CItWJ8Q5cvuPIkik',
    },
    {
      id: 2,
      name: 'Robiul Islam',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam?',
      // img: 'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Jui',
      userId: 3,
      profilePic:
        'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam?',
      img: 'https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      name: 'Jennie',
      userId: 1,
      profilePic:
        'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat veniam, odit tempore quod ratione ipsam?',
      img: 'https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="posts">
      <Share />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
