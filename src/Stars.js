import React, { Component } from 'react';
export default class Stars extends Component {
    defaultProps: {
        percentage: 0
    };

    render () {
        let stars = [];
        let p_rating = Math.round (this.props.percentage/10)/2;

        for (var i = 1; i <= Math.floor(p_rating); i++) {
            stars.push(<i is="star" className="fa fa-star rating-star" key={stars.length}></i>)
        }
        if (p_rating %1>0) {
            stars.push(<span className="fa-stack rating-star-half-container" key={stars.length}>
                       <i className="fa fa-star fa-stack-1x rating-star-half-empty"></i>
                       <i className="fa fa-star-half fa-stack-1x rating-star-half"></i>
                       </span>)
        }
        for (var i = Math.ceil(p_rating); i < 5; i++) {
            stars.push(<i is="star" className="fa fa-star-outline" key={stars.length}></i>)
        }

        return (
            <div data-toggle="tooltip" data-placement="right" title={Math.round(this.props.percentage) / 10 + "/10"} className="star-container-tv">
                {stars}
            </div>
        )
    }
}
