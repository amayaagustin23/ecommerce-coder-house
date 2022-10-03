import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SideBar = () => {
  const marcas = ['Adidas', 'Nike', 'Puma', 'Umbro', 'Under Armour'];
  const generos = ['Hombre', 'Mujer'];
  const talles = ['S', 'M', 'L', 'XL'];

  return (
    <div className="sidebar-container">
      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filtros</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="span">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Generos</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {generos.map((item) => (
                    <FormControlLabel key={item} control={<Checkbox />} label={item} />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Talles</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {talles.map((item) => (
                    <FormControlLabel key={item} control={<Checkbox />} label={item} />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Marcas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  {marcas.map((item) => (
                    <FormControlLabel key={item} control={<Checkbox />} label={item} />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SideBar;
