import React from 'react';

const News = (props) => {
  return (
    <div className='single-article'>
      <a target='_blank' href={props.article.url} className='link-to-article'>
        {props.article.title}
      </a>
    </div>
  );

}

export default News;
