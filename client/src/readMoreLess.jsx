import { useState } from 'react';

const ReadMoreLess = ({ cls, limit, children }) => {
  const [isReadMoreShown, setReadMoreShown] = useState(false);

  const text = children;
  const length = text.length;

  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  const btnStyle = { fontWeight: 'bold', cursor: 'pointer', marginLeft: '3px' };

  return (
    <div>
      <p className={cls}>
        {isReadMoreShown ? text : text.substring(0, limit)}
        {length > limit && '...'}
        {length > limit && (
          <span style={btnStyle} onClick={toggleBtn}>
            {isReadMoreShown ? 'See Less' : 'See more'}
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMoreLess;
