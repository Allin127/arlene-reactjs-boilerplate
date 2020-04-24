import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function NotFound() {
  return (
    <div className="basic-not-found">
      <div className="exceptionContent">

        <div className="prompt">
          {/* <h3 className="title">
              抱歉，你访问的页面不存在
            </h3> */}
          <img
            src={require('./404.png')}
            className="imgException"
            alt="页面不存在"
          />
          <br />
          <br />
          <p className="description">
            您要找的页面没有找到，请返回<Link to="/first">首页</Link>继续浏览
            </p>
        </div>
      </div>
    </div>
  );
}

