import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DetailAccordion = ({ data }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Descripcion</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <div className="product-container__description-container">
        <div className="product-container__description">
          <p>{data.descripcion}</p>
        </div>
        <div className="product-container__box-description">
          <ol className="product-container__list-description">
            <li>
              <span className="product-container__item-description">Género:</span>
              {data.genero}
            </li>
            <li>
              <span className="product-container__item-description">Material:</span>
              Poliéster
            </li>
            <li>
              <span className="product-container__item-description">Manga: </span>
              Corta
            </li>
            <li>
              <span className="product-container__item-description">Garantía:</span>
              Contra defecto de fabricación.
            </li>
            <li>
              <span className="product-container__item-description">Marca: </span>
              {data.marca}
            </li>
          </ol>
          <ol className="product-container__list-description">
            <li>
              <span className="product-container__item-description">Cuello:</span>
              {data.cuello}
            </li>
            <li>
              <span className="product-container__item-description">Calce:</span>
              {data.calce}
            </li>
            <li>
              <span className="product-container__item-description">Liga: </span>
              {data.liga}
            </li>
          </ol>
        </div>
      </div>
    </AccordionDetails>
  </Accordion>
);
DetailAccordion.propTypes = {
  data: PropTypes.objectOf.isRequired
};

export default DetailAccordion;
