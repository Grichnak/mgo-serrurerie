import React from 'react';
import './faq.css';

const Faq = () => {
  return (
    <section id="faq">
      <h1 className="faqTitle">F.A.Q.</h1>
      <div className="faqSection">
        <div className="questionBox">
          <h2 className="questionTitle">
            Les prix sont ils connus à l'avance ?
          </h2>
          <p className="questionText">
            Oui, nous faisons obligatoirement un devis avant chaque
            intervention. Nous ne commençons pas l'intervention tant que le
            devis n'est pas accepté par le client avec une signature. Le prix
            annoncé pour le devis ne changera en aucun cas après la fin de
            l'intervention.
          </p>
        </div>
        <div className="questionBox">
          <h2 className="questionTitle">Le Déplacement est il payant ?</h2>
          <p className="questionText">
            Le déplacement est inclus dans chaque intervention. Il sera
            uniquement facturé si notre artisan se déplace et que la prestation
            est refusé.
          </p>
        </div>
        <div className="questionBox">
          <h2 className="questionTitle">Les devis sont il payant ?</h2>
          <p className="questionText">
            Non, les devis sont totalement gratuits.
          </p>
        </div>
        <div className="questionBox">
          <h2 className="questionTitle">Dans quelle zone nous intervenons ?</h2>
          <p className="questionText">
            Nous pouvons intervenir en majorité dans le Val d'Oise et l'Oise,
            mais aussi en île de France .
          </p>
        </div>
        <div className="questionBox">
          <h2 className="questionTitle">Je reçois une facture ?</h2>
          <p className="questionText">
            Oui, chaque intervention ou dépannage donne lieu à un devis puis une
            facture peu importe le montant de l'intervention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
