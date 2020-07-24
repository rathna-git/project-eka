import React from 'react';

import './article_toolbar.styles.scss';

class ArticleToolBar extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll(event) {
    let toolBar = document.getElementById('toolBar');
    let toolBarPos = toolBar.offsetTop + 50;

    let scrollPos = window.scrollY;

       if(scrollPos >= toolBarPos){
        toolBar.classList.add('is-visible');
       } else {
       toolBar.classList.remove('is-visible');
       }
 };
  render(){
    return(
        <div id= 'toolBar' className='articleToolBar'>
          <p>
            <span className='heading text-subdued'>Now Reading:</span>
            <span className='heading'>{this.props.heading}</span>
          </p>
      </div>
    );
  }
}

export default ArticleToolBar;
