import React, { Component, Fragment } from "react";

import { 
  Grid, 
  Card, 
  Icon, 
  Fab,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody 
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import api from "../../services/api";


class detalhesExercicio extends Component {
    

  render() {
    const {exercicio} = this.props.location.state;

    console.log(exercicio);

    return (
      <Fragment>
        <div className="pb-24 pt-7 px-8 bg-primary">
          <div className="card-title capitalize text-white mb-4 text-white-primary">
            {exercicio.nome}
          </div>
        </div>

        <div className="analytics m-sm-30 mt--18">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>



              <Card elevation={3} className="pt-5 mb-6">
                <div className="card-title px-6 mb-3">Movimentos</div>
                <div className="overflow-auto">
                  <Table className="product-table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="px-6" colSpan={2}>
                          Nome
                        </TableCell>
                        <TableCell className="px-6" colSpan={2}>
                          Conta
                        </TableCell>
                        <TableCell className="px-0" colSpan={2}>
                          Tipo
                        </TableCell>
                        <TableCell className="px-0" colSpan={1}>
                          Ação
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {exercicio.movimentacoes.map((movimentacao, index) => (
                        
                          <TableRow key={index}>
                            
                            <TableCell className="px-0 capitalize" colSpan={2} align="left">
                              <Link to={{ pathname: 'detalhesExercicios' }}>{movimentacao.nome}</Link>                    
                            </TableCell>

                            <TableCell className="px-0" align="left" colSpan={2}>
                              {movimentacao.conta}
                            </TableCell>

                            <TableCell className="px-0" align="left" colSpan={2}>
                              {movimentacao.tipoConta == "D" ? "Débito" : "Crédito"}
                            </TableCell>

                            <TableCell className="px-0" colSpan={1}>
                              <IconButton>
                                <Icon color="primary">edit</Icon>
                              </IconButton>
                            </TableCell>
                          </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>



            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(detalhesExercicio);
