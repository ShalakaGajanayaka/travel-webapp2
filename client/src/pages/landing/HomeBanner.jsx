import React from 'react'
import bannerImage from '../../assets/images/landingPageImage1.jpg';


export default function () {
    return (
        <div>
            <div data-cy="home-banner">
                <div
                    className="banner banner--xs-8-11 banner--sm-4-3 banner--md-7-3 banner--lg-7-3 banner--xl-7-3"
                    data-cy="banner"
                >
                    <div className="banner__content" data-cy="banner__content">
                        <div className="banner__content-image" data-cy="banner__content-image">
                            <img
                                src={bannerImage}
                                srcSet={bannerImage}
                                style={{ backgroundColor: "#E9E9E9" }}
                                className="imagery imagery--fluid imagery--cover-right"
                                alt=""
                                loading="eager"
                            />
                        </div>
                        <div className="l-container u-height--full">
                            <div className="home-banner">
                                <div className="home-banner__content">
                                    <span className="u-text-decoration--none">
                                        <h1 className="home-banner__title" data-cy="home-banner-title">
                                            {/* Only Intrepiid */}
                                        </h1>
                                    </span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
