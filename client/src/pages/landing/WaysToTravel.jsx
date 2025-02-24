import React from 'react';

export default function WaysToTravel() {
  const travelTypes = [
    {
      id: 1,
      href: "javascript:void(0)",
      imageSrc: "https://example.com/walking-trekking.jpg",
      altText: "Panorama of Nangma Valley campsite with river flowing by backed by huge craggy mountains with snow",
      label: "Walking & trekking",
    },
    {
      id: 2,
      href: "javascript:void(0)",
      imageSrc: "https://example.com/cycling.jpg",
      altText: "Intrepid travellers cycling the Athabasca River near Jasper in Canada",
      label: "Cycling",
    },
    {
      id: 3,
      href: "javascript:void(0)",
      imageSrc: "https://example.com/family.jpg",
      altText: "Family of Intrepid travellers group shot in Marrakech",
      label: "Family",
    },
    {
      id: 4,
      href: "javascript:void(0)",
      imageSrc: "https://example.com/polar.jpg",
      altText: "Travellers on shore in Antarctica with penguins in background",
      label: "Polar",
    },
    {
      id: 5,
      href: "javascript:void(0)",
      imageSrc: "https://example.com/food.jpg",
      altText: "Travellers with fresh ice cream in Kas, Turkey",
      label: "Food",
    },
    {
      id: 6,
      href: "javascript:void(0)",
      imageSrc: "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blte825aa50135ff401/66f26155f9cb26477843cb1b/Pakistan-nangma-valley-hiking-campsite-PANO_IMG_9086-720.jpg",
      altText: "Intrepid cruise ship Grand Queen Beatriz at sunrise in off the coast of Isla Bartolome in Galapagos",
      label: "Cruises",
    },
  ];

  return (
    <div id='waystotravel'>
      <div className="u-margin-top--4 sm:u-margin-top--6" data-cy="home-themes">
        <h2 className="u-margin-top--0">Ways to travel</h2>
        <div className="carousel-static" aria-label="Ways to travel" data-cy="carousel-static">
          <div className="carousel-static__container" data-cy="carousel-static-container">
            <div className="carousel-static__content">
              {travelTypes.map((travel) => (
                <div className="carousel-static__item" key={travel.id} data-cy="carousel-static-item">
                  <div className="card">
                    <a href={travel.href} className="card__content card__content--link">
                      <div className="card__image" data-cy="card-image">
                        <img
                          style={{
                            backgroundColor: "#E9E9E9",
                            height: 0,
                            paddingTop: "66.66666666666666%",
                          }}
                          className="imagery imagery--fluid imagery--cover-center"
                          width="720"
                          height="480"
                          alt={travel.altText}
                          loading="lazy"
                          src={travel.imageSrc}
                        />
                      </div>
                      <div className="card__text">
                        <div className="card__section card__section--content" data-cy="card-content">
                          <strong>{travel.label}</strong>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              <div className="carousel-static__item card u-flex-direction--row" data-cy="carousel-static-item">
                <a href="javascript:void(0)" className="button button--unboxed button--block" aria-label="See all themes">
                  <strong className="u-padding-right--0-5">See all themes</strong>
                  <svg version="1.1" className="icon icon--size-1-5" role="presentation" width="16" height="16" viewBox="0 0 24 24">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
