import React, { Component } from 'react';
import './index.css'

class News extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="news">
                <div className="search">
                    <div className="icon">
                        <img src={require('../../common/images/search.png')} alt=""/>
                    </div>
                    <input type="text" value="" placeholder="搜索"/>
                </div>
                
            </div>
         );
    }
}
 
export default News;