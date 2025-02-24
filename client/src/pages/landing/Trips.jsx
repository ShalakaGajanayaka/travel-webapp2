import React from 'react'

const trips = [
    {
        id: 1,
        href: "/en/japan/premium-highlights-japan-160295",
        imageSrc: "https://example.com/japan-image.jpg",
        altText: "Map of Premium Highlights Of Japan including Japan",
        label: "9 Days · Premium",
        title: "Premium Highlights of Japan",
        oldPrice: "$5,550",
        newPrice: "$4,995",
    },
    {
        id: 2,
        href: "/en/italy/taste-of-italy-160296",
        imageSrc: "https://example.com/italy-image.jpg",
        altText: "Map of Taste of Italy tour including Italy",
        label: "7 Days · Culinary",
        title: "Taste of Italy",
        oldPrice: "$3,200",
        newPrice: "$2,895",
    },
    {
        id: 2,
        href: "/en/italy/taste-of-italy-160296",
        imageSrc: "https://example.com/italy-image.jpg",
        altText: "Map of Taste of Italy tour including Italy",
        label: "7 Days · Culinary",
        title: "Taste of Italy",
        oldPrice: "$3,200",
        newPrice: "$2,895",
    },
    {
        id: 2,
        href: "/en/italy/taste-of-italy-160296",
        imageSrc: "https://example.com/italy-image.jpg",
        altText: "Map of Taste of Italy tour including Italy",
        label: "7 Days · Culinary",
        title: "Taste of Italy",
        oldPrice: "$3,200",
        newPrice: "$2,895",
    },
    {
        id: 2,
        href: "/en/italy/taste-of-italy-160296",
        imageSrc: "https://example.com/italy-image.jpg",
        altText: "Map of Taste of Italy tour including Italy",
        label: "7 Days · Culinary",
        title: "Taste of Italy",
        oldPrice: "$3,200",
        newPrice: "$2,895",
    },
    {
        id: 2,
        href: "/en/italy/taste-of-italy-160296",
        imageSrc: "https://example.com/italy-image.jpg",
        altText: "Map of Taste of Italy tour including Italy",
        label: "7 Days · Culinary",
        title: "Taste of Italy",
        oldPrice: "$3,200",
        newPrice: "$2,895",
    },
    // Add more trips as needed
];

export default function Trips() {
    return (
        <div className="u-margin-bottom--4 u-margin-top--4 sm:u-margin-top--6" data-cy="home-trips" id='trips'>
            <h2 className="headline--2 u-margin-top--0">Our trips</h2>
            <div className="u-margin-bottom--4">
                <div className="carousel-static" aria-label="trip-carousel" data-cy="carousel-static">
                    <div className="carousel-static__container" data-cy="carousel-static-container">
                        <div className="carousel-static__content">
                            {trips.map((trip) => (
                                <div className="carousel-static__item" key={trip.id} data-cy="carousel-static-item">
                                    <div className="card" data-cy="trip-card">
                                        <a href={trip.href} className="card__content card__content--link">
                                            <div className="card__image" data-cy="card-image">
                                                <img
                                                    style={{
                                                        backgroundColor: "#b4d6f4",
                                                        height: 0,
                                                        paddingTop: "66.81818181818183%",
                                                    }}
                                                    className="imagery imagery--fluid imagery--cover-center"
                                                    width="1100"
                                                    height="735"
                                                    alt={trip.altText}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="card__text">
                                                <div className="card__section card__section--label" data-cy="card-label">
                                                    {trip.label}
                                                </div>
                                                <div className="card__section card__section--heading" data-cy="card-heading">
                                                    <div className="headline--5 u-margin-top--0 u-margin-bottom--0">
                                                        {trip.title}
                                                    </div>
                                                </div>
                                                <div className="card__section card__section--content" data-cy="card-content">
                                                    <div className="product-card">
                                                        <div className="product-card__bottom">
                                                            <div className="product-card__prices" data-cy="product-card-prices">
                                                                From{" "}
                                                                <span className="product-card__label-sr">Was</span>
                                                                <div className="price product-card__was-price" data-cy="product-card-was-price">
                                                                    <span data-cy="price-currency-code">USD</span>
                                                                    <span data-cy="price-value">{trip.oldPrice}</span>
                                                                </div>
                                                                <span className="product-card__label-sr">Now</span>
                                                                <br />
                                                                <div className="price product-card__price" data-cy="product-card-price">
                                                                    <span data-cy="price-currency-code">USD</span>
                                                                    <span data-cy="price-value">{trip.newPrice}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
