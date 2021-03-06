import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash'; 
import classNames from 'classnames';
import validUrl from 'valid-url';

import userImageFallback from './../img/avatar_2x.png';
class Post extends Component {
    constructor(props) {
        super(props);
        this.handleVisibilityClick = this.handleVisibilityClick.bind(this);
        this.state =  {
            visible: true
        }
    }

    handleVisibilityClick() {
        this.setState(({ visible }) => ({ visible: !visible }));
    }

    render() {
        const { children, image, username } = this.props;
        const { visible } = this.state;
        const userImage = isEmpty(image) ? userImageFallback :validUrl.isWebUri(image) ? image : userImageFallback;
        const panelBodyClassNames = classNames('panel-body', { 'hidden': !visible });
        return (
            <div onClick={this.handleVisibilityClick}>
                <div>
                    <div>
                        <img
                            alt={username}
                            src={userImage}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <strong>{username}</strong>
                        </div>
                        <div className={panelBodyClassNames}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

Post.propTypes = {
    children: PropTypes.string,
    image: PropTypes.string,
    username: PropTypes.string
};

export default Post;
