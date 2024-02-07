import React from 'react';
import './prices.css';

const Prices = () => {
  return (
    <section id="prices" className="pricesSection">
      <h1 className="pricesTitle">Nos Tarifs</h1>

      <p className="pricesTitleText">
        Les tarifs ne sont pas majorés pour les jours fériés /week-ends et
        horaires de nuit. Toute prestation comprend les frais de déplacement
        inclus.
      </p>

      <div className="pricesContainer">
        <div className="priceBox">
          <h2 className="priceTitle"> Mise en sécurité après une effraction</h2>
          <p className="priceText">80 €</p>
        </div>

        <div className="priceBox">
          <h2 className="priceTitle">Ouverture porte claquée</h2>
          <p className="priceText">90 €</p>
        </div>

        <div className="priceBox">
          <h2 className="priceTitle">Ouverture porte fermée</h2>
          <p className="priceText">135 €</p>
          <p className="priceComment">
            Ce prix est susceptible de varier en fonction de la complexité de la
            serrure.
          </p>
        </div>
      </div>
      <div className="otherContainer">
        <h2 className="otherTitle">Autres prestations</h2>
        <p className="otherText">
          Pour toute demande relative aux services mentionnés ci-dessous,
          veuillez nous contacter par téléphone ou par mail, afin d'obtenir une
          estimation tarifaire la plus précise possible.
        </p>
        <ul className="otherList">
          <li>Porte bloqué </li>
          <li>
            Installation tout type de serrure ou de changement de
            serrure/cylindre
          </li>
          <li>Installation ou changement de porte </li>
          <li>Pose de blindage sur porte</li>
          <li>Dépannage volet roulant </li>
          <li>Entretien serrure </li>
        </ul>
      </div>
    </section>
  );
};

export default Prices;
