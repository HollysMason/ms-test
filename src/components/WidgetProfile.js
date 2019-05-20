import React from 'react';

const WidgetProfile = ({followers,  following, name, avatar}) => {

    return (
        <div className="WidgetProfile">
            <header className="WidgetProfile__header">
                <h3 className="WidgetProfile__name">{name}</h3>
                <hr/>
            </header>
            <div className="WidgetProfile__avatarContainer">
                <div className="WidgetProfile__avatarFrame">
                    <img className="WidgetProfile__avatar" src={avatar} alt="avatar"/>
                </div>
            </div>
            <footer className="WidgetProfile__footer">
                <div className="WidgetProfile__statistic">
                    <span className="WidgetProfile__count">{ followers }</span>
                    <span className="WidgetProfile__subCount">Followers</span>
                </div>
                <div className="WidgetProfile__devider"></div>
                <div className="WidgetProfile__statistic">
                    <span className="WidgetProfile__count">{following}</span>
                    <span className="WidgetProfile__subCount">Followers</span>
                </div>
            </footer>
        </div>
    );
};

export default WidgetProfile;